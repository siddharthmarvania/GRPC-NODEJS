// Original file: src/proto/greeting.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GreetingMessage as _com_example_javagrpc_GreetingMessage, GreetingMessage__Output as _com_example_javagrpc_GreetingMessage__Output } from '../../../com/example/javagrpc/GreetingMessage';
import type { GreetingResponse as _com_example_javagrpc_GreetingResponse, GreetingResponse__Output as _com_example_javagrpc_GreetingResponse__Output } from '../../../com/example/javagrpc/GreetingResponse';

export interface GreetingServiceClient extends grpc.Client {
  greeting(argument: _com_example_javagrpc_GreetingMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_example_javagrpc_GreetingResponse__Output>): grpc.ClientUnaryCall;
  greeting(argument: _com_example_javagrpc_GreetingMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_example_javagrpc_GreetingResponse__Output>): grpc.ClientUnaryCall;
  greeting(argument: _com_example_javagrpc_GreetingMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_com_example_javagrpc_GreetingResponse__Output>): grpc.ClientUnaryCall;
  greeting(argument: _com_example_javagrpc_GreetingMessage, callback: grpc.requestCallback<_com_example_javagrpc_GreetingResponse__Output>): grpc.ClientUnaryCall;
  greeting(argument: _com_example_javagrpc_GreetingMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_example_javagrpc_GreetingResponse__Output>): grpc.ClientUnaryCall;
  greeting(argument: _com_example_javagrpc_GreetingMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_example_javagrpc_GreetingResponse__Output>): grpc.ClientUnaryCall;
  greeting(argument: _com_example_javagrpc_GreetingMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_com_example_javagrpc_GreetingResponse__Output>): grpc.ClientUnaryCall;
  greeting(argument: _com_example_javagrpc_GreetingMessage, callback: grpc.requestCallback<_com_example_javagrpc_GreetingResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GreetingServiceHandlers extends grpc.UntypedServiceImplementation {
  greeting: grpc.handleUnaryCall<_com_example_javagrpc_GreetingMessage__Output, _com_example_javagrpc_GreetingResponse>;
  
}

export interface GreetingServiceDefinition extends grpc.ServiceDefinition {
  greeting: MethodDefinition<_com_example_javagrpc_GreetingMessage, _com_example_javagrpc_GreetingResponse, _com_example_javagrpc_GreetingMessage__Output, _com_example_javagrpc_GreetingResponse__Output>
}
