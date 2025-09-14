import React from "react";
import "../Style/RankingPage.css";

// Platform Logos (SVG/PNG best hoga, abhi placeholder emoji/letter use kar raha hu)
import leetcodeLogo from "../Assets/leetcode.png"; 
import hackerrankLogo from "../Assets/hackerranks.png";
import hackerearthLogo from "../Assets/hackerearth.png";
import gfgLogo from "../Assets/gfg.png";
import codechefLogo from "../Assets/codechef.png";
import github1 from "../Assets/github1.png";

const rankingData = [
  {
    id: 1,
    name: "LeetCode",
    link: "https://leetcode.com/YOUR_USERNAME",
    logo: leetcodeLogo,
  },
  {
    id: 2,
    name: "HackerRank",
    link: "https://www.hackerrank.com/profile/princebams07",
    logo: hackerrankLogo,
  },
  {
    id: 3,
    name: "HackerEarth",
    link: "https://www.hackerearth.com/@YOUR_USERNAME",
    logo: hackerearthLogo,
  },
  {
    id: 4,
    name: "GeeksforGeeks",
    link: "https://auth.geeksforgeeks.org/user/YOUR_USERNAME/practice/",
    logo: gfgLogo,
  },
  {
    id: 5,
    name: "CodeChef",
    link: "https://www.codechef.com/users/YOUR_USERNAME",
    logo: codechefLogo,
  },

  {
    id: 6,
    name: "github",
    link: "https://github.com/Piyushpandey09",
    logo: github1,
  },
];

function RankingPage() {
  return (
    <section className="ranking-page">
      <h1 className="ranking-title">🏆 My Competitive Rankings</h1>

      <div className="rank-grid">
        {rankingData.map((platform) => (
          <a
            key={platform.id}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rank-card"
          >
            <img src={platform.logo} alt={platform.name} />
            <p>{platform.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default RankingPage;
