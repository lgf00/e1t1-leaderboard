import React from 'react';
import Header from '../components/Header';
import TLLeaderboard from '../components/TLLeaderboard'

export default function TLCurrentWeek(){
    return (
        <div>
          <Header name="Team Leaders Current Week"/>
          <TLLeaderboard/>
        </div>
    );
}