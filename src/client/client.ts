import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { PackageDefinition } from '@grpc/proto-loader';
import { ProtoGrpcType } from '@proto/greeting';
import path from 'path';

const PROTO_FILE = '../proto/greeting.proto';

const PORT = 9090;

const packageDefinition: PackageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));

const paymentGrpcObj: ProtoGrpcType = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;


const client = new paymentGrpcObj.com.example.javagrpc.GreetingService(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)


const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err)
        return
    }
    onClientReady()
})

function onClientReady() {

    client.greeting({ message: "Ping" }, (err, response) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(response);
    });
}

