import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreetingServiceClient as _com_example_javagrpc_GreetingServiceClient, GreetingServiceDefinition as _com_example_javagrpc_GreetingServiceDefinition } from './com/example/javagrpc/GreetingService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  com: {
    example: {
      javagrpc: {
        GreetingMessage: MessageTypeDefinition
        GreetingResponse: MessageTypeDefinition
        GreetingService: SubtypeConstructor<typeof grpc.Client, _com_example_javagrpc_GreetingServiceClient> & { service: _com_example_javagrpc_GreetingServiceDefinition }
      }
    }
  }
}

