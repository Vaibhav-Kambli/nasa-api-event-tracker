import { Icon } from '@iconify/react';
import fireIcon from '@iconify-icons/noto-v1/fire';


const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={fireIcon} /> Wildfire Tracker (Powered By NASA) - Version 0.0.1</h1>
        </header>
    )
}

export default Header