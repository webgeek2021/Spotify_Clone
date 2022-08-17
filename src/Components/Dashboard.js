import React  from 'react';
import { Container, Row, Col, Button, Offcanvas, OffcanvasBody } from 'react-bootstrap'
import './dashboard.css'

import Navbar from './Navbar/navbar.js'

import { IoChevronDownSharp } from 'react-icons/io5'
import SongsList from './songs_list/songList.js';
import PlayerPanel from './Player/playerPanel.js';
import {BiDotsVerticalRounded } from 'react-icons/bi'
import {BsThreeDots} from 'react-icons/bs'
import {useSelector , useDispatch} from 'react-redux';


function Dashboard() {

    const [toogle, settoogle] = React.useState(0);
    const [toogleList ,settoogleList] = React.useState(0);

    const color = useSelector((state)=>state.song.color);
    const handleClose = () => settoogle(false);
    const handleShow = () => settoogle(true);
    const handleSonglist = ()=>{
        settoogleList(prev => !prev);
    }
    return (
        <>
            <Container fluid className="dashboard" >
                <Row>
                    <Col xs={1} md={12} lg={2}>
                        <div className="navbar--panel d-lg-block d-none d-md-none d-sm-none">
                            {toogle ? <Offcanvas show={toogle} onHide={handleClose} className="offcanvas" style={{background: `linear-gradient(108.18deg,#000000 2.46%,  ${color[0]}  99.84%)`}} >
                                <Offcanvas.Header closeButton closeVariant='white'>
                                </Offcanvas.Header>
                                <OffcanvasBody>
                                    <Navbar className={"offcanvas-nav"} />
                                </OffcanvasBody>
                            </Offcanvas> : <Navbar className={"navbar"}/>}
                        </div>
                        <div className='d-sm-block d-md-block d-lg-none nav-dropdown' onClick={handleShow}> <IoChevronDownSharp /></div>
                    </Col>
                   
                    <Col xs={11} md={{span:6 , order:1}} lg={4}>
                        <div className='d-sm-block d-lg-none d-md-none songlist-btn' onClick={handleSonglist}>{toogleList ?<BiDotsVerticalRounded/> : <BsThreeDots/> }</div>
                        {
                        toogleList ?
                        // visible in small device
                        <div className='songlist--panel '>
                            <SongsList />
                        </div>
                        :
// visible on medium and large device 
                        <div className='songlist--panel d-lg-block d-none d-md-block '>
                            <SongsList />
                        </div>

                        }

                    </Col>
                    <Col xs={{span:12,order:2}} md={{span:6 , order:2}} lg={6}>
                            <PlayerPanel />
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Dashboard;