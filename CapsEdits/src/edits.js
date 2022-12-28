"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    postDBLoad(container) {
        // get database from server
        const databaseServer = container.resolve("DatabaseServer");
        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();
        // Items from database ID's
        const morphine = tables.templates.items["544fb3f34bdc2d03748b456a"];
        const zagustin = tables.templates.items["5c0e533786f7747fa23f4d47"];
        const propital = tables.templates.items["5c0e530286f7747fa1419862"];
        const ronin = tables.templates.items["5b4329f05acfc47a86086aa1"];
        const hexgrid = tables.templates.items["5fd4c474dd870108a754b241"];
        const zhuk = tables.templates.items["5c0e625a86f7742d77340f62"];
        const ospreyAssault = tables.templates.items["60a3c70cde5f453f634816a3"];
        const ospreyDefence = tables.templates.items["60a3c68c37ea821725773ef5"];
        const AVS = tables.templates.items["544a5caa4bdc2d1a388b4568"];
        // Meds
        morphine._props.MaxHpResource = 3;
        morphine._props.effects_health.Energy.value = -5;
        morphine._props.effects_health.Hydration.value = -5;
        morphine._props.effects_damage.Pain.duration = 450;
        zagustin._props.MaxHpResource = 3;
        tables.globals.config.Health.Effects.Stimulator.Buffs.BuffsPropital[0].Value = 10;
        tables.globals.config.Health.Effects.Stimulator.Buffs.BuffsPropital[0].Duration = 900;
        tables.globals.config.Health.Effects.Stimulator.Buffs.BuffsAdrenaline[4].Value = 20;
        tables.globals.config.Health.Effects.Stimulator.Buffs.BuffsAdrenaline[4].Duration = 20;
        tables.globals.config.Health.Effects.Stimulator.Buffs.BuffseTGchange[0].Value = 25;
        tables.globals.config.Health.Effects.Stimulator.Buffs.BuffseTGchange[0].Duration = 45;
        tables.globals.config.Health.Effects.Stimulator.Buffs.BuffseTGchange[1].Value = 3;
        tables.globals.config.Health.Effects.Stimulator.Buffs.BuffseTGchange[1].Duration = 45;
        // Armors
        ronin._props.armorClass = 5;
        ronin._props.BlocksEarpiece = false;
        ronin._props.BlocksEyewear = false;
        ronin._props.BlocksFaceCover = false;
        ronin._props.speedPenaltyPercent = 0;
        ronin._props.mousePenalty = 0;
        ronin._props.weaponErgonomicPenalty = 0;
        ronin._props.DeafStrength = "None";
        hexgrid._props.armorZone.push("Stomach");
        zhuk._props.ArmorMaterial = "Combined";
        ospreyAssault._props.ArmorMaterial = "UHMWPE";
        ospreyDefence._props.ArmorMaterial = "UHMWPE";
    }
}
module.exports = { mod: new Mod() };
