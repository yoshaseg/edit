import React, {Component} from 'react'
import styles from './app.scss';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        ssss
                    </div>
                </div>
                <div className={styles.text}>
                    ssss
                </div>
            </div>
        )
    }
}

export default App
