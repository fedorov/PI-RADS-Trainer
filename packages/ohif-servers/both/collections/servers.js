import { Mongo } from 'meteor/mongo';
import { OHIF } from 'meteor/ohif:core';
// import { Servers as ServerSchema } from 'meteor/ohif:servers/both/schema/servers.js';

// Servers describe the DICOM servers configurations
const Servers = new Mongo.Collection('servers');
// TODO: Make the Schema match what we are currently sticking into the Collection
//Servers.attachSchema(ServerSchema);
Servers._debugName = 'Servers';
OHIF.servers.collections.servers = Servers;

export { Servers };
