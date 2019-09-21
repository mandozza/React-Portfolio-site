import React from 'react'
import {Grid, Cell} from 'react-mdl';
export default function Landing() {
    return (
        <div className="main-body">
            <Grid className="landind-grid">
                <Cell col={12}>
                    <img 
                        src="http://images2.fanpop.com/images/photos/3100000/Glenn-Howerton-glenn-howerton-3185917-389-500.jpg"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="main-body-title-wrapper">
                        <h1 className="main-body-title">Denis Reynolds the Golden God!</h1>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
