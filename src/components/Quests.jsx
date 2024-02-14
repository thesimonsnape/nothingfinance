import React from 'react'

const quests = [
    {
        id: 1,
        name: 'Join our Discord',
        description: 'Join our Discord to get access to the latest updates, ask questions, and get help from the community!',
        points: '100',
        status: 'active'
    },
    {
        id: 2,
        name: 'Say GM in Discord ☀️',
        description: 'Head to the #gm channel on our discord and say GM to get daily points',
        points: '10 pts per gm per day',
        status: 'active'
    },
    {
        id: 3,
        name: 'Follow on twitter',
        description: 'Follow our twitter to get access to the latest updates, ask questions, and get help from the community!',
        points: '1000',
        status: 'active'
    },
]

const Quests = () => {
  return (
    <div>
        <div>
            <table className='w-full'>
                <thead>
                    <tr className='text-gray-500 font-semibold'>
                        <td className='w-auto max-w-49 h-10 text-xl'>QUESTS</td>
                        <td className='w-fit h-10 text-xl'>POINTS</td>
                        <td className='w-fit h-10 text-xl'>STATAUS</td>
                    </tr>
                </thead>
                <tbody>
                    {quests.map((quest, idx) => {
                        return (
                            <tr key={idx} className={`${idx % 2 === 0? 'bg-[#06060d] ' : 'bg-[#0e0f11]'} text-slate-50`}>
                                <td className='py-3'>
                                    <div>
                                        <div className='text-lg font-semibold'>{quest.name}</div>
                                        <div className='text-sm text-slate-400 font-medium'>{quest.description}</div>
                                    </div>
                                </td>
                                <td className='py-3'>{quest.points} PTS</td>
                                <td className='py-3'>
                                    <button className='rounded-full px-4 py-2 shadow-md bg-gradient-to-r from-[#0a0015] to-gray-800'>Connect Wallet</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Quests