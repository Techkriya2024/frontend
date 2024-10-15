import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Home from './Home';
import QrReader from '../components/QrReader';

function MainPage() {
  const [menu, setMenu] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);  

  const settingMenu = () => {
    setMenu(!menu);
  };

  const handleQrScannerOpen = () => {
    setIsQrOpen(true);
  };

  const handleQrScannerClose = () => {
    setIsQrOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <Home settingmenu={settingMenu} />
        <MenuBar settingmenu={settingMenu} menu={menu} />
      </div>

      {isQrOpen && (
        <div className="qr-reader-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="qr-reader-container bg-white p-4 rounded-lg shadow-lg relative">
            <QrReader />
            <button
              onClick={handleQrScannerClose}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={handleQrScannerOpen}
      >
        Open QR Scanner
      </button>
    </div>
  );
}

export default MainPage;
