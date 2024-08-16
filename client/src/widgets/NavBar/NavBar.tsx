import { useAppSelector } from '../../App/provider/store/store';
import { GuestNavBar } from './ui/GuestNavBar';
import { PlayerNavBar } from './ui/PlayerNavBar';

export function NavBar() {
  const currentUser = useAppSelector(
    (state) => state.currentUserStore.user
  );

  return currentUser ? <PlayerNavBar /> : <GuestNavBar />;
}
