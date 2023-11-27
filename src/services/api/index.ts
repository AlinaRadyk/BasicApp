import axios from 'services/axios';

// @ts-ignore
import { API_HOST } from '@env';

export default class Api {
  static async getCamerasLocations(): Promise<boolean> {
    const { data } = await axios.get(API_HOST);
    return data;
  }
}
