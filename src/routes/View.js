import { NavLink, Outlet } from 'react-router-dom'

import styles from './View.module.css'

export default function View({ list }) {
    return (
        <div className={styles.container}>
            <div className={styles.sideBar}>
                <h2>View</h2>
                {list.map((item) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles.linkActive : styles.link
                        }
                        to={`/view/${item.id}`}
                        key={item.id}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </div>
    )
}
