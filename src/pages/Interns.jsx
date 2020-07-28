import React from 'react';
import Header from '../components/Header';
import Leaderboard from '../components/Leaderboard'

export default function Home(){
    return (
        <div>
          <Header name="Interns"/>
          <Leaderboard/>
        </div>
    );
}
