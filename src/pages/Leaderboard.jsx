
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Trophy, Star, Award, Users } from 'lucide-react';

const LeaderboardRow = ({ rank, name, points, wins }) => {
  return (
    <motion.div 
      className="flex items-center justify-between bg-codeGray rounded-lg p-4 mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, backgroundColor: "#262626" }}
    >
      <div className="flex items-center gap-4">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
          rank === 1 ? 'bg-yellow-500' : 
          rank === 2 ? 'bg-gray-300' : 
          rank === 3 ? 'bg-amber-700' : 'bg-codeBlue/20'}`}>
          {rank}
        </div>
        <div className="font-bold">{name}</div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <Trophy className="w-4 h-4 text-codeBlue" />
          <span>{points}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>{wins}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Leaderboard = () => {
  const leaderboardData = [
    { id: 1, rank: 1, name: "CodeMaster", points: 1250, wins: 42 },
    { id: 2, rank: 2, name: "ByteNinja", points: 980, wins: 31 },
    { id: 3, rank: 3, name: "PixelWarrior", points: 875, wins: 28 },
    { id: 4, rank: 4, name: "DataDragon", points: 720, wins: 22 },
    { id: 5, rank: 5, name: "AlgoQueen", points: 650, wins: 19 },
    { id: 6, rank: 6, name: "BugHunter", points: 580, wins: 16 },
    { id: 7, rank: 7, name: "CodeWizard", points: 510, wins: 14 },
    { id: 8, rank: 8, name: "TechTitan", points: 450, wins: 12 },
  ];

  return (
    <div className="min-h-screen bg-codeDark flex flex-col">
      <Header />
      
      <motion.main 
        className="flex-1 container mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4">
              <span className="blue-o">L</span>eaderboard
            </h1>
            <p className="text-muted-foreground">Top Code Warriors Ranked by Performance</p>
          </motion.div>
          
          <motion.div 
            className="mb-10 bg-codeGray/50 rounded-xl p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="text-codeBlue h-5 w-5" />
                <h2 className="text-xl font-bold">Top Performers</h2>
              </div>
              <div className="flex gap-2">
                <motion.span 
                  className="text-sm px-3 py-1 rounded-full bg-codeBlue/20 text-codeBlue cursor-pointer"
                  whileHover={{ backgroundColor: "rgba(77, 144, 214, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Weekly
                </motion.span>
                <motion.span 
                  className="text-sm px-3 py-1 rounded-full bg-codeBlue text-white cursor-pointer"
                  whileHover={{ backgroundColor: "#5DA0E6" }}
                  whileTap={{ scale: 0.95 }}
                >
                  All Time
                </motion.span>
              </div>
            </div>
            
            <div className="space-y-2">
              {leaderboardData.map((player) => (
                <LeaderboardRow 
                  key={player.id}
                  rank={player.rank}
                  name={player.name}
                  points={player.points}
                  wins={player.wins}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-codeGray rounded-lg p-4 text-center">
              <Award className="h-8 w-8 text-codeBlue mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-1">4,293</h3>
              <p className="text-sm text-muted-foreground">Total Matches</p>
            </div>
            <div className="bg-codeGray rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-codeBlue mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-1">1,428</h3>
              <p className="text-sm text-muted-foreground">Active Players</p>
            </div>
            <div className="bg-codeGray rounded-lg p-4 text-center">
              <Star className="h-8 w-8 text-codeBlue mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-1">98,542</h3>
              <p className="text-sm text-muted-foreground">Points Earned</p>
            </div>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
