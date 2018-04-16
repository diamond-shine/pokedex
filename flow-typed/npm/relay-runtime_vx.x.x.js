declare module "relay-runtime" {
  // Until these packages properly export Flow types, this is the minimal set-up
  // required to stop the exported types in the __generated__ artifacts from
  // being invisible to Flow. See:
  // - https://github.com/facebook/relay/issues/1689
  // - https://github.com/facebook/relay/issues/1758
  declare type ConcreteFragment = any;
  declare type ConcreteBatch = any;
  declare type ConcreteRequest = any;
  declare type FragmentReference = any;
  declare type Environment = any;
  declare type Network = any;
  declare type Store = any;
  declare type RecordSource = any;
}
