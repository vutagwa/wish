import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as walletIDL, canisterId as walletCanisterId } from '../declarations/Wallet';

const agent = new HttpAgent();
const walletActor = Actor.createActor(walletIDL, {
  agent,
  canisterId: 'bd3sg-teaaa-aaaaa-qaaba-cai',
});

export default walletActor;
