#!/usr/bin/env node
const program = require('commander');
const Tado = require('node-tado-client');

if (!process.env.TADO_USERNAME || !process.env.TADO_PASSWORD) {
  console.log('Please set TADO_USERNAME and TADO_PASSWORD env variables first.');
  return;
}

const tado = new Tado();

program
  .version('1.0.0')
  .description('Unofficial Tado CLI');

program
  .command('homes')
  .description('List Homes')
  .action(async (folder, domain) => {
    await tado.login(process.env.TADO_USERNAME, process.env.TADO_PASSWORD);
    const me = await tado.getMe();

    console.log(me.homes);
  });

program
  .command('zones <homeid>')
  .description('List Zones for given Home ID')
  .action(async (homeid) => {
    await tado.login(process.env.TADO_USERNAME, process.env.TADO_PASSWORD);
    const zones = await tado.getZones(homeid);

    console.log(zones);
  });


program
  .command('report <homeid> <zoneid> <date>')
  .description('Get Report for given date')
  .action(async (homeid, zoneid, date) => {
    await tado.login(process.env.TADO_USERNAME, process.env.TADO_PASSWORD);
    const report = await tado.getZoneDayReport(homeid, zoneid, date);

    console.log(report);
  });

program.parse(process.argv);
