import Footer from "../components/Footer";
import Logo from "../components/Logo";
import PageHeader from "../components/PageHeader";
import PageNav from "../components/PageNav";

import styles from "./Basics.module.css";

function Basics() {
  return (
    <main className={styles.basics}>
      <PageNav />
      <PageHeader img={"gamebasics"}>Game Basics</PageHeader>
      <section>
        <p>
          Where do i get this?:
          <span>
            <a
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=2902500867"
              className="links"
            >
              Site reference link
            </a>
          </span>
        </p>

        <article>
          <h2>Crystal Slots</h2>
          <p>
            Additionally to flat stat increases, each weapon and armor upgrade
            also adds an additional crystal slot to it, allowing you to put
            larger or more crystals into them.
          </p>
          <img src="basics1.png" alt="basic 1" className={styles.img} />
        </article>

        <article>
          <h2>Crystals</h2>
          <img src="basics2.png" alt="basic 2" className={styles.img} />
          <p>
            Crystals enhance weapon and armor abilities by providing additional
            passive skills to the party member using equipment with crystals in
            it. They can be very powerful and easily turn the outcome of a
            battle when set up right beforehand.
          </p>

          <h2>Types</h2>
          <p>Crystals come in 4 types:</p>
          <br />
          <ul className={styles.listUl}>
            <li>
              <strong>Status</strong> - Grant passive skills that give bonuses
              on attributes or bonuses for wearing the equipment
            </li>
            <li>
              <strong>Offensive</strong> - Grant passive skills that enhance
              physical and magical attacks by adding properties, increasing
              their power or inflicting status effects
            </li>
            <li>
              <strong>Defensive</strong> - Grant passive skills that enhance
              defense by adding properties, increasing attributes, resistances
              or status effects
            </li>
            <li>
              <strong>Utility</strong> - Grant passive skills that greatly vary
              in effect
            </li>
          </ul>
        </article>

        <article>
          <h2>Variations</h2>
          <p>
            Crystals come in 2 variations: Natural and artificial. Artificial
            crystals are marked with an asterisk (*) in front of the crystal`s
            name. When fusing crystals, the resulting crystal will always be
            artificial. Artificial crystals cannot be used as fuse crystals,
            only base crystals.
          </p>

          <h2>Purity</h2>
          <p>
            Each crystal comes with a random purity level (P) to it. The higher
            the purity, the better crystals you can fuse with them.
          </p>

          <h2>Rank</h2>
          <p>
            The crystal`s rank is shown through roman numerals next to its name.
            It ranges from I to X, with X being the maximum rank a crystal can
            have, regardless of purity or size. A crystal`s passive skill
            becomes stronger with higher rank, in total 3 levels per skill. The
            required ranks for each level are:
          </p>
          <ul className={styles.listUl}>
            <li>III: Skill level 1 </li>
            <li>V: Skill level 2 </li>
            <li>X: Skill level 3</li>
          </ul>

          <h2>Size</h2>
          <p>
            Each crystal comes in a random size between 1 and 3, indicated by
            small circles representing the amount of slots a crystal needs in an
            equipment piece. The smaller the size and the higher the purity the
            better the crystal is for slotting and fusing.
          </p>
        </article>

        <article>
          <h2>Fusing Crystals</h2>
          <img src="basics3.png" alt="basic 3" className={styles.img} />
          <p>
            You can combine / fuse crystals with the same passive skill on them.
          </p>
          <br />
          <p>
            When combining a crystal you choose a base crystal and a fuse
            crystal with purity (P) above 0 for either and confirm the fusion.
          </p>
          <br />
          <p>
            Only pure crystals can be used as fuse crystals. Artificial crystals
            (marked with an asterisk (*) in front of the name) can only be used
            as base crystals.
          </p>
          <br />
          <p>After fusing two crystals, the resulting crystal:</p>
          <br />
          <ul className={styles.listUl}>
            <li>
              Will have the purity of the base crystal minus 1 (e.g. P3 --&gt;
              P2) regardless of the fuse crystal`s purity.
            </li>
            <li>
              Will have the sum of both crystal`s rank (e.g. III + IV = VII)
            </li>
            <li>
              Will be the average size of both crystal`s size (e.g. * + *** =
              **)
            </li>
            <li>Becomes an artificial crystal</li>
          </ul>
        </article>

        <article>
          <h2>Adding / Removing from Weapons / Armor</h2>
          <img src="basics4.png" alt="basic 4" className={styles.img} />
          <p>In order to add a crystal into a weapon or armor:</p>
          <br />
          <ul className={styles.listUl}>
            <li>The crystal needs to be rank III or higher</li>
            <li>
              The equipment needs to have the amount of crystal slots available
              / free for the crystal`s size to fit
            </li>
          </ul>
          <br />
          <p>
            You can set multiple crystals into the same piece of equipment as
            long as the above requirements are met.
          </p>
          <br />
          <p>When removing a crystal from a piece of equipment, the crystal:</p>
          <br />
          <ul className={styles.listUl}>
            <li>Will get a purity of 0 (P0)</li>
            <li>Will get a size of 3 (***)</li>
          </ul>
          <br />
          <p>
            When removing a pure crystal from weapon or armor, it can not be
            used as a base crystal for fusing anymore, but as a fuse crystal.
          </p>
          <br />
        </article>
        <br />
        <hr />
        <h1>God King - Optional Boss</h1>
        <article>
          <p>
            To summon the God King, you`ll need all the elemental tablets
            slotted into the location below.
          </p>
          <img src="godking1.jpg" alt="godking 1" className={styles.img} />
          <p>There are 6 tablets in total to collect all over the world:</p>
          <p>1. Earth Tablet</p>
          <p>2. Fire Tablet</p>
          <p>3. Water Tablet</p>
          <p>4. Wind Tablet</p>
          <p>5. Darkness Tablet</p>
          <p>6. Light Tablet</p>
        </article>
        <article>
          <h2>Getting Started</h2>
          <p>
            Before you start looking for the tablets, make sure you have the
            following:
          </p>
          <br />
          <p>
            <strong>Elevator Key</strong> - from the Magic Academy Nhysa. This
            key will let you go to the lower floors of Raminas Tower which
            connects to the NE area of Ograne Grottos. Accessing this area also
            gives you access to the secret merchant (see Ultimate Weapon
            category above).
          </p>
          <img src="godking2.jpg" alt="godking 2" className={styles.img} />
          <p>
            <strong>Bag of Charon’s </strong> - which you can obtain from the
            Manor once unlocked with the Manor Key (see the Rohlan Fields
            section of my checklist). These coins are used to take Charon`s boat
            which you can access when you reach the NE area of Ograne Grottos
            via descending Raminas Tower. It will lead you to East Ograne
            Grottos (Baalrut Tunnel) which connects you to a couple of Elemental
            Tablets and collectibles.
          </p>
          <br />
          <p>
            <strong>Baibai X</strong> -which gives you access to NE Perpetua
            (Light Tablet). It can be purchased from the merchant in the Goblin
            Village. To access the village, start/progress the side quest A
            Goblin`s Dilemma. Buy `The Human Language` book as well while you`re
            at it for the next item.
          </p>
          <br />
          <p>
            <strong>Miner`s Key</strong> - which you can obtain in the same
            Goblin Village by speaking to one of the villagers who will mention
            that the key was lost in the mushroom field nearby. This gives you
            access to the elevator in the middle of Rockbottom leading to the
            Darkness Tablet.
          </p>
          <img src="godking3.jpg" alt="godking 3" className={styles.img} />
        </article>
        <article>
          <h2>Tablet Locations</h2>
          <h3>Earth Tablet</h3>
          <p>
            First off, use the Elevator Key to descend Raminas Tower to access
            the (1) NE area of Ograne Grottos. Next, continue to the eastern tip
            of that area to take (2) Charon`s boat and finally get access to the
            last few areas of the map. (3) Head south from the fast-travel
            crystal and all the way to the center to enter a dream world and
            fight Randomage and get the Earth Tablet. Randomage uses multi-hit
            single-target physical attacks and AoE magic attacks of different
            elements.
          </p>
          <img src="godking4.JPG" alt="godking 4" className={styles.img} />
          <h3>Baalrut Tunnel</h3>
          <p>
            After getting the Earth Tablet, head east from the same fast-travel
            crystal and into the Baalrut Tunnel. This area connects to a Gold
            Chest in Rohlan Fields and 2 other Elemental Tablets. GO North for
            the Fire Tablet and south for the Water Tablet. Just be warned that
            there is a boss fight in the northern part of the tunnel. You can`t
            kill the boss but you`ll still get a Grimoire Shard when she runs
            away.
          </p>
          <img src="godking5.jpg" alt="godking 5" className={styles.img} />
          <h3>Fire Tablet</h3>
          <p>
            No boss fight here in this sandstorm area (the dev refers to it as
            Paomi Desert) but there is a merchant, some crystal nodes, and the
            Fire Tablet.
          </p>
          <img src="godking6.jpg" alt="godking 6" className={styles.img} />
          <h3>Water Tablet</h3>
          <p>
            Heading to the South exit of Baalrut Tunnel lands us in Narslene
            Sewers. The goal here is to solve the water handle puzzle to raise
            up the ramp shown below. This leads to a fight against BB and the
            Water Tablet.
          </p>
          <img src="godking7.jpg" alt="godking 7" className={styles.img} />
          <h3>Wind Tablet</h3>
          <p>
            Sometime after the Marylea gets wrecked by Tormund, the boss battle
            against the Krakun becomes available on the NE part of the World
            Map. It`s a Sky Armor battle so I recommend getting the Golden
            Voucher from the secret merchant in Ograne Grottos so you can buy
            the best Sky Armor gear available in Hooge.
          </p>
          <img src="godking8.jpg" alt="godking 8" className={styles.img} />
          <p>
            Once the Krakun is defeated, one of the chests behind it will
            contain the Wind Tablet.
          </p>
          <br />
          <h3>Darkness Tablet</h3>
          <p>
            Using the Miner`s Key obtained earlier, go to the middle of
            Rockbottom and take the elevator down. You`ll use the Miner`s Key
            one more time throughout this linear path to unlock a door.
          </p>
          <img src="godking9.jpg" alt="godking 9" className={styles.img} />
          <p>
            Along the path, you`ll be able to pick up the Darkness tablet and
            also have the option of breaking/burning the totem to break a
            curse.I suggest doing it so you can also get one of the last Unique
            Monsters tied to breaking the goblin curse.
          </p>
          <img src="godking10.jpg" alt="godking 10" className={styles.img} />
          <h3>Light Tablet</h3>
          <p>
            Lastly, using the Baibai X purchased from the Goblin Village
            merchant, go through the NE part of Perpetua and fight the Assassin
            Girl who is guarding the only path to the Light Tablet.
          </p>
          <img src="godking11.jpg" alt="godking 11" className={styles.img} />
        </article>
        <h2>God King Gaemdriel</h2>
        <p>
          Once you`ve slotted all the Elemental Tablets in, step into the circle
          in the middle to fight the God King Gaemdriel.
        </p>
        <br />
        <hr />
        <article>
          <h2>What does Oil, Dry etc. do?</h2>
          <ul className={styles.listUl}>
            <li>
              Enemies with these debuffs receive increased damage (`weakness` is
              triggered).
            </li>
            <li>Oil: Increases fire damage</li>
            <li>Dry: Increases water damage</li>
            <li>Heavy: Increases earth damage</li>
            <li>Wet: Increases wind damage</li>
          </ul>

          <h2>
            What is Hate? Why is this enemy only attacking the same party
            member?
          </h2>
          <p>
            It`s this game`s aggro mechanic. The more damage a party member does
            to an enemy the more hate they have against the party member and the
            likeliness of the enemy attacking them is increased.
          </p>

          <h2>Note</h2>
          <p>
            You can buy Incocybin Berries from the Goblin Village, which becomes
            available after starting the sidequest A Goblin`s Dilemma.
          </p>
        </article>
      </section>
      <div className="strayLogo">
        <Logo />
      </div>
      <Footer />
    </main>
  );
}

export default Basics;
