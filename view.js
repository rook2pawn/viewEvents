#!/usr/bin/env node

const through2 = require("through2")
const JSONStream = require("JSONStream")
const wantedEvents = ['stop_task_appointment', 'stop_actual_arrival_time', 'stop_actual_departure_time']

process.stdin
.pipe(JSONStream.parse('*'))
.pipe(through2.obj(function (obj, enc, callback) {
  if (obj.entity_type == "stop") {
  console.log("GOT IT! OBJ:", obj)
  }
  if (wantedEvents.indexOf(obj.event_type) != -1) { 
  console.log("GOT IT! OBJ:", obj)
  }
    //this.push(data) 
    
    callback()
  }))
  .on('data', (data) => {
  })
  .on('end', () => {
  })
