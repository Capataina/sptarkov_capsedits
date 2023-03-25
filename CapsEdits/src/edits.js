"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
class Mod {
    postDBLoad(container) {
        // get database from server
        const databaseServer = container.resolve("DatabaseServer");
        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();
        const therapistAssort = tables.traders["54cb57776803fa99248b456e"].assort;
        // Items from database ID's
        const morphine = tables.templates.items["544fb3f34bdc2d03748b456a"];
        const zagustin = tables.templates.items["5c0e533786f7747fa23f4d47"];
        const propital = tables.templates.items["5c0e530286f7747fa1419862"];
        const sj9 = tables.templates.items["5fca13ca637ee0341a484f46"];
        const ronin = tables.templates.items["5b4329f05acfc47a86086aa1"];
        const trooperMask = tables.templates.items["5ea058e01dbce517f324b3e2"];
        const opscoreSideArmor = tables.templates.items["5a16badafcdbcb001865f72d"];
        const hexgrid = tables.templates.items["5fd4c474dd870108a754b241"];
        const zhuk = tables.templates.items["5c0e625a86f7742d77340f62"];
        const thor = tables.templates.items["60a283193cb70855c43a381d"];
        const DRDvest = tables.templates.items["62a09d79de7ac81993580530"];
        const ospreyAssault = tables.templates.items["60a3c70cde5f453f634816a3"];
        const ospreyDefence = tables.templates.items["60a3c68c37ea821725773ef5"];
        const AVS = tables.templates.items["544a5caa4bdc2d1a388b4568"];
        // SJ9 Edits
        tables.globals.config.Health.Effects.Stimulator.Buffs.Buffs_BodyTemperature =
            [
                {
                    AbsoluteValue: true,
                    BuffType: "HealthRate",
                    Chance: 1,
                    Delay: 1,
                    Duration: 900,
                    SkillName: "",
                    Value: 5,
                },
                {
                    AbsoluteValue: true,
                    BuffType: "MaxStamina",
                    Chance: 1,
                    Delay: 1,
                    Duration: 300,
                    SkillName: "",
                    Value: 25,
                },
                {
                    AbsoluteValue: true,
                    BuffType: "StaminaRate",
                    Chance: 1,
                    Delay: 1,
                    Duration: 300,
                    SkillName: "",
                    Value: 2,
                },
                {
                    AbsoluteValue: true,
                    BuffType: "SkillRate",
                    Chance: 1,
                    Delay: 1,
                    Duration: 450,
                    SkillName: "Metabolism",
                    Value: 25,
                },
                {
                    AbsoluteValue: true,
                    BuffType: "SkillRate",
                    Chance: 1,
                    Delay: 1,
                    Duration: 450,
                    SkillName: "Health",
                    Value: 25,
                },
                {
                    AbsoluteValue: true,
                    BuffType: "SkillRate",
                    Chance: 1,
                    Delay: 1,
                    Duration: 450,
                    SkillName: "Vitality",
                    Value: 25,
                },
                {
                    AbsoluteValue: true,
                    BuffType: "RemoveAllBloodLosses",
                    Chance: 1,
                    Delay: 0,
                    Duration: 300,
                    SkillName: "",
                    Value: 0,
                },
            ];
        sj9._props.effects_damage = {
            LightBleeding: {
                delay: 0,
                duration: 300,
                fadeOut: 0,
            },
            HeavyBleeding: {
                delay: 0,
                duration: 300,
                fadeOut: 0,
            },
            Pain: {
                delay: 0,
                duration: 450,
                fadeOut: 0,
            },
        };
        sj9._props.MaxHpResource = 3;
        const SJ9 = {
            _id: "5fca13ca637ee0341a484f46",
            _tpl: "5fca13ca637ee0341a484f46",
            parentId: "hideout",
            slotId: "hideout",
            upd: {
                UnlimitedCount: true,
                StackObjectsCount: 12940000,
            },
        };
        therapistAssort.items.push(SJ9);
        therapistAssort.barter_scheme["5fca13ca637ee0341a484f46"] = [
            [
                {
                    count: 280000,
                    _tpl: Money_1.Money.ROUBLES,
                },
            ],
        ];
        therapistAssort.loyal_level_items["5fca13ca637ee0341a484f46"] = 1;
        // Secure Container Alpha in Therapist
        const ContainerAlpha = {
            _id: "544a11ac4bdc2d470e8b456a",
            _tpl: "544a11ac4bdc2d470e8b456a",
            parentId: "hideout",
            slotId: "hideout",
            upd: {
                UnlimitedCount: true,
                StackObjectsCount: 12940000,
            },
        };
        therapistAssort.items.push(ContainerAlpha);
        therapistAssort.barter_scheme["544a11ac4bdc2d470e8b456a"] = [
            [
                {
                    count: 1,
                    _tpl: Money_1.Money.ROUBLES,
                },
            ],
        ];
        therapistAssort.loyal_level_items["544a11ac4bdc2d470e8b456a"] = 1;
        // Meds
        morphine._props.MaxHpResource = 3;
        morphine._props.effects_health.Energy.value = -5;
        morphine._props.effects_health.Hydration.value = -5;
        morphine._props.effects_damage.Pain.duration = 600;
        zagustin._props.MaxHpResource = 3;
        propital._props.MaxHpResource = 3;
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
        trooperMask._props.armorClass = 4;
        opscoreSideArmor._props.ConflictingItems = [];
        hexgrid._props.armorZone.push("Stomach");
        zhuk._props.ArmorMaterial = "Combined";
        DRDvest._props.armorClass = 7;
        thor._props.Durability = 75;
        thor._props.MaxDurability = 75;
        thor._props.ArmorMaterial = "Aramid";
        ospreyAssault._props.ArmorMaterial = "UHMWPE";
        ospreyDefence._props.ArmorMaterial = "UHMWPE";
    }
}
module.exports = { mod: new Mod() };
