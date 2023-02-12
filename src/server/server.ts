import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { PackageDefinition } from '@grpc/proto-loader';
import { ProtoGrpcType } from '@proto/employee';
import { RandomHandlers } from '@proto/randomPackage/Random';
import path from 'path';



const PORT = 8082;
const PROTO_FILE = '../proto/employee.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const randomPackage = grpcObj.randomPackage


function main() {
    const server = getServer()

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(`Your server as started on port ${port}`)
            server.start()
        })
}

function getServer() {
    const server = new grpc.Server()
    server.addService(randomPackage.Random.service, {
        PingPong: (req, res) => {
            console.log(req.request)
            res(null, { message: "Pong 2" })
        },
    } as RandomHandlers)

    return server
}

main();