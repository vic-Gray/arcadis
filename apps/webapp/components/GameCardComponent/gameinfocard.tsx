import React from "react";
import { FaShareAlt, FaComment, FaTwitter, FaDiscord, FaTelegram, FaGlobe } from "react-icons/fa";

interface GameInfoProps {
  image: string;
  title: string;
  developer: { name: string; url: string; logo: string };
  rating: number;
  status: "upcoming" | "active" | "completed";
  description: string;
  players?: number;
  community?: number;
  categories: string[];
  platforms?: string[];
  showFeedback?: boolean; // Optional feedback button
  additionalActions?: React.ReactNode; // Custom actions (extendability)
}

const GameInfoCard: React.FC<GameInfoProps> = ({
  image,
  title,
  developer,
  rating,
  status,
  description,
  players,
  community,
  categories,
  platforms = [],
  showFeedback = false,
  additionalActions,
}) => {
  // Format numbers into K/M format
  const formatNumber = (num?: number) => {
    if (!num) return "N/A";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M+";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K+";
    return num.toString();
  };

  return (
    <div className="bg-[#0A1A2A] text-white w-full max-w-sm rounded-xl shadow-lg p-5 flex flex-col justify-between">
      {/* "Write Your Review" Button */}
      <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg w-full mb-4">
        Write Your Review
      </button>

      {/* Game Image with Status */}
      <div className="relative">
        <img src={image} alt={title} className="rounded-lg w-full h-[180px] object-cover" />
        <span
          className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-md font-semibold ${
            status === "active" ? "bg-green-600" : status === "upcoming" ? "bg-yellow-500" : "bg-gray-600"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Game Info */}
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          {/* Developer & Title */}
          <div className="flex items-center gap-3">
            <img src={developer.logo} alt={developer.name} className="w-9 h-9 rounded-lg" />
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <a href={developer.url} className="text-blue-400 text-xs hover:underline">
                {developer.name}
              </a>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="bg-green-600 text-white px-3 py-1 text-sm font-bold rounded-md">
            {rating}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-tight mt-1">{description}</p>

        {/* Stats (Players & Community) */}
        <div className="mt-3">
          <div className="flex justify-between text-sm">
            <p className="text-gray-400">Players</p>
            <p className="text-white font-semibold">{formatNumber(players)}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-400">Community</p>
            <p className="text-white font-semibold">{formatNumber(community)}</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-3">
          {categories.map((category, index) => (
            <span key={index} className="bg-green-600 text-xs px-3 py-1 rounded-md">
              {category}
            </span>
          ))}
        </div>

        {/* Platforms */}
        {platforms.length > 0 && (
          <div className="mt-3">
            <p className="text-gray-400 text-sm">Platforms</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {platforms.map((platform, index) => (
                <span key={index} className="bg-blue-600 text-xs px-3 py-1 rounded-md">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section: Social Media + Share Button */}
      <div className="flex justify-between items-center mt-5 text-gray-400 border-t border-gray-700 pt-3">
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            <FaTwitter className="text-lg" />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaDiscord className="text-lg" />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTelegram className="text-lg" />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaGlobe className="text-lg" />
          </a>
        </div>

        {/* Share & Feedback Buttons */}
        <div className="flex gap-2">
          <button className="p-2 rounded-md hover:bg-gray-800 transition">
            <FaShareAlt className="text-lg" />
          </button>
          {showFeedback && (
            <button className="p-2 rounded-md hover:bg-gray-800 transition">
              <FaComment className="text-lg" />
            </button>
          )}
        </div>
      </div>

      {/* Additional Actions (Optional) */}
      {additionalActions && <div className="mt-3">{additionalActions}</div>}
    </div>
  );
};

export default GameInfoCard;
