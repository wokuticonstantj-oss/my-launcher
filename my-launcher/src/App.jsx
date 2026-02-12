import React from 'react';
import { motion } from 'framer-motion';

// Individual Icon with professional spring physics
const AppIcon = ({ name, color }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{
      width: '65px', height: '65px', backgroundColor: color,
      borderRadius: '16px', display: 'flex', alignItems: 'center',
      justifyContent: 'center', color: 'white', fontSize: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)', cursor: 'pointer'
    }}
  >
    {name}
  </motion.div>
);

export default function Launcher() {
  return (
    <div style={{
      height: '100vh', width: '100vw', margin: 0, overflow: 'hidden',
      background: 'linear-gradient(135deg, #1e1e2f 0%, #0f0f1a 100%)',
      display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif'
    }}>
      {/* Top Section - App Grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px', padding: '40px 20px', flex: 1
      }}>
        <AppIcon name="Web" color="#4285F4" />
        <AppIcon name="Social" color="#E1306C" />
        <AppIcon name="Files" color="#FFBB00" />
        <AppIcon name="Settings" color="#757575" />
      </div>

      {/* Bottom Section - The Dock */}
      <div style={{
        margin: '20px', padding: '15px', borderRadius: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)', display: 'flex',
        justifyContent: 'space-around', border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <AppIcon name="Call" color="#34A853" />
        <AppIcon name="Chat" color="#25D366" />
        <AppIcon name="Code" color="#333333" />
      </div>
    </div>
  );
}

