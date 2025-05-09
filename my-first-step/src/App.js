import React, { useState } from 'react';
// 删除对 App.css 的引用
// import './App.css';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.title}>我今天完成了第一件小事：我整理了书桌。</h1>
      <button onClick={handleClick} style={styles.button}>我准备开始下一步</button>
      {showMessage && <p style={styles.message}>你已经走在进步的路上！继续加油 💪</p>}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20vh',
    fontFamily: 'Arial',
    padding: '20px',
  },
  title: {
    color: '#333',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
    backgroundColor: '#222',
    color: '#fff',
    border: '2px solid white',
    borderRadius: '50px',
  },
  message: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#006400',
  },
};

export default App;
