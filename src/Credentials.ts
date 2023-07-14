/**
 * A partial copy of the credentials from the AWS SDK for JS: https://github.com/aws/aws-sdk-js/blob/master/lib/credentials.d.ts
 * The interface is copied here so that a dependency on the AWS SDK for JS is not needed.
 */
export default interface Credentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
  getPromise?(): Promise<void>;
}
