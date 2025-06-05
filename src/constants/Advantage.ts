import gloves from '../assets/boxs/gloves.png';
import glovesmoney from '../assets/boxs/glovesmoney.png';
import schedule from '../assets/boxs/schedule.png';
import growth from '../assets/boxs/growth.png';
import connection from '../assets/boxs/connection.png';
export interface Advantage {
    id: number,
    name: string,
    img: string,
    description: string
}
export const boxesAdvantages: Advantage[] = [
    {
        id: 1,
        name: 'Fighters With Heart',
        img: gloves,
        description: 'Discover passionate local fighters with a range of expertise, enthusiastic about mentoring you. Every booking directly benefits their journey, helping them chase their aspirations.'
    },
    {
        id: 2,
        name: 'Empower Dreams',
        img: glovesmoney,
        description: 'Each session booked secures a consistent income for fighters and contributes to gym stability, ensuring both can concentrate on delivering the best training experiences for you.'
    },
    {
        id: 3,
        name: 'Seamless Scheduling',
        img: schedule,
        description: "Secure your slot with ease, whether it's one-on-one coaching, energizing group sessions, or exclusive seminars. Boxy's system simplifies your booking experience."
    },
    {
        id: 4,
        name: 'Witness Growth',
        img: growth,
        description: "See tangible improvements in your skills. Track achievements, rejoice in milestones, and set fresh objectives with Boxy's insights, all while backing local talent and gyms."
    },
    {
        id: 5,
        name: 'Community Connection',
        img: connection,
        description: "Immerse yourself in a community united by passion. Engage with fighters, gym owners, and fellow enthusiasts, creating a network anchored by a shared love for combat sports."
    }
]