#!/usr/bin/env sh
# set -e

echo "Installing NodeJS"
source ~/.nvm/nvm.sh
nvm install
nvm use

echo "Installing Ruby"
if [[ -x "$HOME/.rbenv/versions/2.7.2/bin:$PATH" ]]; then
  export PATH="$HOME/.rbenv/versions/2.7.2/bin:$PATH"
else
  brew install rbenv ruby-build
  eval "$(rbenv init - zsh)"
  rbenv install 2.7.2
  export PATH="$HOME/.rbenv/versions/2.7.2/bin:$PATH"
fi

echo "Installing Bundler 2.2.11"
gem install bundler:2.2.11

echo "Installing gems"
bundle install

echo "Installing Watchman"
if type -p watchman; then
  echo "Found watchman executable in PATH"
else
  brew install watchman
fi

echo "Installing Yarn"
if type -p yarn; then
  echo "Found yarn executable in PATH"
else
  npm install -g yarn
fi

if type -p java; then
    echo "Found JAVA executable in PATH"
    _java=java
elif [[ -n "$JAVA_HOME" ]] && [[ -x "/Library/Java/Home" ]];  then
    echo "Found JAVA executable in JAVA_HOME"
    _java="$JAVA_HOME/bin/java"
else
    echo "no java"
fi

JAVA_VERSION=$(java -version 2>&1 | sed -n ';s/.* version "\(.*\)\.\(.*\)\..*".*/\1\2/p;')

if [[ "$_java" ]] && [[ "$JAVA_VERSION" -ge "110" ]]; then
    echo "JAVA version is meet requirements"
else
    echo "JAVA version is lover than version 11"

    while true; do
        read -n 3 -p "Do you wish to install JAVA? [y/n]: " yn
        echo "Answer is $yn"
        case $yn in
            [Yy]* )
            answer=true
            break;;
            [Nn]* )
            answer=false
            break;;
            * )
            echo "Please enter Y/N";;
        esac
    done

    if $answer; then
        echo "Installing Java 11 ..."
        brew tap homebrew/cask-versions && brew install java11
    fi
fi

echo "Installing project dependencies..."
yarn install
