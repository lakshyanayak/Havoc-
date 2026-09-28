import { useState } from "react";
import "./TradingCentre.css";

function TradingCentre() {
  // Player's credits
  const [credits, setCredits] = useState(1000);

  // Items the player has purchased
  const [inventory, setInventory] = useState([]);

  // Currently selected category
  const [category, setCategory] = useState("ALL");

  // Message shown after buying
  const [message, setMessage] = useState("");

  // All items available in the Trading Centre
  const items = [
    {
      id: 1,
      name: "Water",
      description: "Purified water supply for long journeys.",
      price: 50,
      emoji: "💧",
      category: "SURVIVAL",
      effect: "+15 ENERGY",
    },
    {
      id: 2,
      name: "Energy Cell",
      description: "High-density energy source for survival systems.",
      price: 120,
      emoji: "⚡",
      category: "TECH",
      effect: "+30 ENERGY",
    },
    {
      id: 3,
      name: "Med Kit",
      description: "Emergency medical equipment for critical situations.",
      price: 150,
      emoji: "❤️",
      category: "HEALTH",
      effect: "+25 HEALTH",
    },
    {
      id: 4,
      name: "Shield",
      description: "Portable protection system for dangerous missions.",
      price: 250,
      emoji: "🛡️",
      category: "TECH",
      effect: "MISSION PROTECTION",
    },
    {
      id: 5,
      name: "Repair Kit",
      description: "Advanced tools for repairing damaged equipment.",
      price: 180,
      emoji: "🔧",
      category: "TECH",
      effect: "REPAIR EQUIPMENT",
    },
    {
      id: 6,
      name: "Data Chip",
      description: "Encrypted data recovered from abandoned systems.",
      price: 300,
      emoji: "💾",
      category: "TECH",
      effect: "+XP",
    },
    {
      id: 7,
      name: "Emergency Ration",
      description: "Compact food supply for survival situations.",
      price: 90,
      emoji: "🥫",
      category: "SURVIVAL",
      effect: "+10 ENERGY",
    },
    {
      id: 8,
      name: "Nano Booster",
      description: "Experimental nanotechnology enhancement capsule.",
      price: 400,
      emoji: "🧬",
      category: "HEALTH",
      effect: "+40 HEALTH",
    },
    {
      id: 9,
      name: "Power Core",
      description: "Rare high-output energy core.",
      price: 500,
      emoji: "🔋",
      category: "TECH",
      effect: "+50 ENERGY",
    },
    {
      id: 10,
      name: "Oxygen Tank",
      description: "Portable oxygen supply for hazardous environments.",
      price: 220,
      emoji: "🫧",
      category: "SURVIVAL",
      effect: "SURVIVAL BOOST",
    },
    {
      id: 11,
      name: "Bio Gel",
      description: "Regenerative gel used by field medics.",
      price: 280,
      emoji: "🧪",
      category: "HEALTH",
      effect: "+35 HEALTH",
    },
    {
      id: 12,
      name: "Quantum Module",
      description: "Extremely rare technology from the old world.",
      price: 750,
      emoji: "💠",
      category: "TECH",
      effect: "RARE UPGRADE",
    },
  ];

  // Show only items belonging to the selected category
  const filteredItems =
    category === "ALL"
      ? items
      : items.filter((item) => item.category === category);

  // Function that runs when the BUY button is clicked
  const buyItem = (item) => {
    // Check whether the player has enough credits
    if (credits < item.price) {
      setMessage("⚠ NOT ENOUGH CREDITS");
      return;
    }

    // Remove the item's price from credits
    setCredits(credits - item.price);

    // Add the item to inventory
    setInventory([...inventory, item]);

    // Show success message
    setMessage(`✓ ${item.name.toUpperCase()} ACQUIRED`);

    // Remove message after 2.5 seconds
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <div
  className="app"
  style={{
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
  }}
>

      {/* Background effects */}
      <div className="grid-background"></div>
      <div className="scanlines"></div>

      {/* ================= HEADER ================= */}

      <header className="top-bar">

        <div className="logo-area">

          <div className="logo-symbol">
            ◈
          </div>

          <div>
            <p className="system-text">
              BLACK MARKET // ONLINE
            </p>

            <h1>TRADING CENTRE</h1>

            <p className="subtitle">
              SUPPLIES • UPGRADES • SURVIVAL
            </p>
          </div>

        </div>

        {/* Credits display */}
        <div className="credits-box">

          <span className="credit-icon">
            ₡
          </span>

          <div>
            <p>AVAILABLE CREDITS</p>
            <strong>{credits}</strong>
          </div>

        </div>

      </header>

      {/* ================= MAIN ================= */}

      <main>

        {/* Hero section */}
        <section className="hero">

          <div>

            <p className="section-code">
              MARKETPLACE // 07
            </p>

            <h2>
              EQUIP YOURSELF.
              <br />
              <span>SURVIVE THE UNKNOWN.</span>
            </h2>

            <p className="hero-description">
              Access restricted supplies, advanced technology
              and survival equipment collected from across the
              wastelands.
            </p>

          </div>

          <div className="market-status">

            <div className="status-dot"></div>

            MARKET STATUS

            <strong>ONLINE</strong>

          </div>

        </section>

        {/* ================= CATEGORIES ================= */}

        <div className="categories">

          {["ALL", "SURVIVAL", "HEALTH", "TECH"].map(
            (cat) => (

              <button
                key={cat}
                className={
                  category === cat
                    ? "category active"
                    : "category"
                }
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>

            )
          )}

        </div>

        {/* ================= MESSAGE ================= */}

        {message && (
          <div className="system-message">
            {message}
          </div>
        )}

        {/* ================= SHOP ================= */}

        <section className="shop">

          {filteredItems.map((item) => (

            <div
              className="item-card"
              key={item.id}
            >

              <div className="card-top">

                <div className="item-icon">
                  {item.emoji}
                </div>

                <span className="item-category">
                  {item.category}
                </span>

              </div>

              <div className="item-info">

                <h3>{item.name}</h3>

                <p>{item.description}</p>

              </div>

              <div className="effect">

                <span>EFFECT</span>

                <strong>
                  {item.effect}
                </strong>

              </div>

              <div className="item-bottom">

                <div className="price">
                  <span>₡</span>
                  {item.price}
                </div>

                <button
                  className="buy-button"
                  onClick={() => buyItem(item)}
                >
                  ACQUIRE
                </button>

              </div>

            </div>

          ))}

        </section>

        {/* ================= INVENTORY ================= */}

        <section className="inventory-section">

          <div className="inventory-header">

            <div>

              <p className="section-code">
                PLAYER STORAGE
              </p>

              <h2>INVENTORY</h2>

            </div>

            <span>
              {inventory.length} ITEMS
            </span>

          </div>

          {inventory.length === 0 ? (

            <div className="empty-inventory">

              <div>◇</div>

              <p>INVENTORY EMPTY</p>

              <span>
                Purchase supplies from the marketplace.
              </span>

            </div>

          ) : (

            <div className="inventory-grid">

              {inventory.map((item, index) => (

                <div
                  className="inventory-item"
                  key={`${item.id}-${index}`}
                >

                  <span className="inventory-icon">
                    {item.emoji}
                  </span>

                  <strong>
                    {item.name}
                  </strong>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <span>
          TRADING NETWORK // SECURE CONNECTION
        </span>

        <span>
          STATUS: ACTIVE
        </span>

      </footer>

    </div>
  );
}

export default TradingCentre;