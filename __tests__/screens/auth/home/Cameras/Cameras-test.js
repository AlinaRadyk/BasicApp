import React from 'react';
import { render } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';

import Cameras from 'screens/home/Cameras';
import CamerasComponent from 'screens/home/Cameras/index.specModel';

import { CAMERAS } from 'constants/index';
import { getEncryptionKey, orderByQuadrant } from 'helpers/index';

import { setCameras } from 'modules/app/actions';

import { configureStore } from 'config/store';

const getStore = async () => {
  const encryptionKey = await getEncryptionKey();
  return configureStore(encryptionKey).store;
};

let store;

describe('Languages settings', () => {
  beforeEach(async () => {
    store = await getStore();
    useSelector.mockImplementation(callback => {
      return callback(store.getState());
    });
    useDispatch.mockReturnValue(store.dispatch);

    store.dispatch(setCameras([]));
  });

  it('It renders empty state of the list of contacts', async () => {
    const component = new CamerasComponent(render(
      <Cameras />,
    ));

    const cameras = await component.getCamerasList();
    expect(cameras.length).toEqual(0);

    const emptyText = await component.getCamerasListEmptyText();
    expect(emptyText).toBe('no_contacts');
  });

  it('It renders list of contacts', async () => {
    store.dispatch(setCameras(orderByQuadrant(CAMERAS)));
    const component = new CamerasComponent(render(
      <Cameras />,
    ));

    const cameras = await component.getCamerasList();
    expect(cameras.length).toEqual(CAMERAS.length);
    expect(store.getState().app.cameras.length).toEqual(CAMERAS.length);

    const camerasList = orderByQuadrant(CAMERAS);

    await cameras.reduce(async (promise, camera, idx) => {
      await promise;

      const description = await component.getCameraListItemDescription(camera.id);
      expect(description).toBe(camerasList[idx].camera_url.description);

      const location = await component.getCameraListItemLocation(camera.id);
      expect(location).toBe(camerasList[idx].camera_location);

      const coordinates = await component.getCameraListItemCoordinates(camera.id);
      expect(coordinates).toBe(`coordinates: (long: ${camerasList[idx]?.point?.coordinates[0]}, lat: ${camerasList[idx]?.point?.coordinates[1]})`);
    }, Promise.resolve());
  });
});
