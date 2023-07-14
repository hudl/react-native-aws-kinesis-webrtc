# React Native

[![CircleCI](https://circleci.com/gh/hudl/react-native-aws-kinesis-webrtc/tree/main.svg?style=svg)](https://circleci.com/gh/hudl/react-native-aws-kinesis-webrtc/tree/main) [![npm version](https://badge.fury.io/js/react-native-aws-kinesis-webrtc.svg)](https://badge.fury.io/js/react-native-aws-kinesis-webrtc)

A port of [amazon-kinesis-video-streams-webrtc-sdk-js](https://github.com/awslabs/amazon-kinesis-video-streams-webrtc-sdk-js) that works for React Native.

## Installation

```sh
yarn add react-native-aws-kinesis-webrtc react-native-webrtc
```

```
npx pod-install
```

## Usage

See https://github.com/awslabs/amazon-kinesis-video-streams-webrtc-sdk-js.

The only API difference is how you register callbacks...

```typescript
// This
signalingClient.on('open', async () => {});

// Becomes
signalingClient.callbacks.open = async () => {};
```

## License

MIT
