import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [selectedType, setSelectedType] = useState('future-sight')

  const hakiTypes = {
    'presence-sensing': {
      title: 'Presence Sensing',
      description: 'Detecting the location, number, and general presence of living beings',
      users: ['Luffy (Basic)', 'Jimbei (Advanced)', 'Usopp (Basic)', 'Koby (Awakened)'],
      examples: [
        'Detecting enemies in a wide area',
        'Sensing the number of opponents',
        'Tracking someone\'s location over distance',
        'Feeling the aura or intent of others'
      ],
      color: '#4A90E2'
    },
    'emotion-reading': {
      title: 'Emotion & Intent Reading',
      description: 'Understanding the emotions, intentions, and nature of others',
      users: ['Otohime', 'Aisa', 'Coby (Early Days)', 'Most Observation Haki Users'],
      examples: [
        'Reading someone\'s true feelings',
        'Sensing hostile intent',
        'Understanding if someone is lying',
        'Feeling the "voice of all things" (advanced)'
      ],
      color: '#7B68EE'
    },
    'future-sight': {
      title: 'Future Sight (Kenbunshoku Haki - Advanced)',
      description: 'Seeing slightly into the future to predict immediate actions and attacks',
      users: ['Katakuri (Master)', 'Luffy (Post-Katakuri)', 'Shanks (Implied)', 'Charlotte Flampe (Failed attempt)'],
      examples: [
        'Seeing opponent\'s next move before it happens',
        'Predicting attacks seconds ahead',
        'Glimpsing short-term future outcomes',
        'Dodging based on foresight rather than reaction'
      ],
      color: '#E74C3C'
    }
  }

  const luffyAnalysis = {
    question: "Why does Luffy say his Observation Haki isn't strong enough to sense Sanji in Episode 1012?",
    answer: [
      {
        point: "Different Specializations",
        explanation: "Observation Haki has multiple distinct abilities. Luffy specialized in Future Sight (predicting attacks) after training with Katakuri, not presence sensing (locating people over distances)."
      },
      {
        point: "Future Sight ≠ Radar Ability",
        explanation: "Future Sight lets Luffy see attacks coming seconds before they happen, but it's focused on combat prediction, not tracking allies or enemies across a battlefield or island."
      },
      {
        point: "Jimbei's Specialization",
        explanation: "Jimbei excels at the 'presence sensing' aspect - detecting locations and numbers of enemies over wide areas. This is a different skill set within Observation Haki."
      },
      {
        point: "Range vs. Precision",
        explanation: "Luffy's Future Sight is extremely precise for close combat but has limited range for general detection. Jimbei can sense presences at much greater distances."
      },
      {
        point: "Training Focus",
        explanation: "During his fight with Katakuri, Luffy trained specifically to counter Future Sight with his own Future Sight. He didn't train broad-range sensing abilities."
      }
    ],
    conclusion: "Yes, there are different types of Observation Haki skills! Sensing enemy presence and predicting moves are indeed two different specializations. Luffy mastered advanced combat prediction (Future Sight) but still has relatively basic presence-sensing abilities compared to specialists like Jimbei."
  }

  const comparisons = [
    {
      character: "Katakuri",
      specialty: "Future Sight (Combat Prediction)",
      level: "Master",
      description: "Can see multiple seconds into the future consistently. Uses it primarily in combat."
    },
    {
      character: "Luffy (Post-Katakuri)",
      specialty: "Future Sight (Combat Prediction)",
      level: "Advanced",
      description: "Can see into the future during intense combat, but not as consistently as Katakuri. Weak at presence sensing."
    },
    {
      character: "Jimbei",
      specialty: "Presence Sensing & Tracking",
      level: "Expert",
      description: "Excellent at detecting enemies, their numbers, and locations over wide areas. Not shown to have Future Sight."
    },
    {
      character: "Usopp",
      specialty: "Presence Sensing (Awakened during Dressrosa)",
      level: "Intermediate",
      description: "Can sense auras and locate specific people at extreme distances. Awakened suddenly during emotional moment."
    },
    {
      character: "Enel",
      specialty: "Presence Sensing (Enhanced by Goro Goro no Mi)",
      level: "Master",
      description: "Combined his Devil Fruit with Observation Haki (Mantra) to sense entire islands. Weak against unpredictable opponents."
    },
    {
      character: "Sanji",
      specialty: "Emotion Reading & Tracking",
      level: "Advanced",
      description: "Can sense people in distress, particularly women. Good at detecting presences and emotions."
    }
  ]

  return (
    <>
      <Head>
        <title>Observation Haki Analysis - One Piece</title>
        <meta name="description" content="Understanding the different types of Observation Haki abilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header className="header">
          <h1>🔮 Observation Haki Analysis</h1>
          <p className="subtitle">Understanding Different Types & Specializations</p>
        </header>

        <section className="question-section">
          <h2>❓ The Episode 1012 Question</h2>
          <div className="question-box">
            <p className="question-text">{luffyAnalysis.question}</p>
          </div>

          <div className="answer-grid">
            {luffyAnalysis.answer.map((item, idx) => (
              <div key={idx} className="answer-card">
                <h3>{item.point}</h3>
                <p>{item.explanation}</p>
              </div>
            ))}
          </div>

          <div className="conclusion-box">
            <h3>✨ Conclusion</h3>
            <p>{luffyAnalysis.conclusion}</p>
          </div>
        </section>

        <section className="types-section">
          <h2>📊 Three Main Types of Observation Haki</h2>

          <div className="type-selector">
            {Object.keys(hakiTypes).map(key => (
              <button
                key={key}
                className={`type-btn ${selectedType === key ? 'active' : ''}`}
                onClick={() => setSelectedType(key)}
                style={{
                  borderColor: selectedType === key ? hakiTypes[key].color : '#ddd'
                }}
              >
                {hakiTypes[key].title}
              </button>
            ))}
          </div>

          <div className="type-details" style={{ borderLeftColor: hakiTypes[selectedType].color }}>
            <h3 style={{ color: hakiTypes[selectedType].color }}>
              {hakiTypes[selectedType].title}
            </h3>
            <p className="type-description">{hakiTypes[selectedType].description}</p>

            <div className="type-info">
              <div className="info-section">
                <h4>Notable Users:</h4>
                <ul>
                  {hakiTypes[selectedType].users.map((user, idx) => (
                    <li key={idx}>{user}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h4>Capabilities:</h4>
                <ul>
                  {hakiTypes[selectedType].examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="comparison-section">
          <h2>⚔️ Character Comparison</h2>
          <div className="comparison-grid">
            {comparisons.map((char, idx) => (
              <div key={idx} className="character-card">
                <h3>{char.character}</h3>
                <div className="specialty-badge">{char.specialty}</div>
                <div className="level-badge" style={{
                  backgroundColor: char.level === 'Master' ? '#E74C3C' :
                                  char.level === 'Expert' ? '#E67E22' :
                                  char.level === 'Advanced' ? '#3498DB' : '#95A5A6'
                }}>
                  {char.level}
                </div>
                <p>{char.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="key-points">
          <h2>🔑 Key Takeaways</h2>
          <div className="takeaway-grid">
            <div className="takeaway-card">
              <div className="takeaway-icon">1️⃣</div>
              <h3>Multiple Skill Sets</h3>
              <p>Observation Haki isn't a single ability - it has at least 3 distinct specializations that users can develop differently.</p>
            </div>
            <div className="takeaway-card">
              <div className="takeaway-icon">2️⃣</div>
              <h3>Training Matters</h3>
              <p>What you train determines what you excel at. Luffy trained Future Sight for combat, not wide-area detection.</p>
            </div>
            <div className="takeaway-card">
              <div className="takeaway-icon">3️⃣</div>
              <h3>Context Dependent</h3>
              <p>Having advanced abilities in one area doesn't mean mastery in all areas. Specialists exist for different aspects.</p>
            </div>
            <div className="takeaway-card">
              <div className="takeaway-icon">4️⃣</div>
              <h3>Complementary Abilities</h3>
              <p>Crew members with different Observation Haki specializations complement each other strategically.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Data based on One Piece manga and anime through Wano Arc</p>
          <p>Episode 1012 context: Onigashima Raid</p>
        </footer>
      </div>
    </>
  )
}
