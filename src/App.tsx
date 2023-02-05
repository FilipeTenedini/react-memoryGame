import { useEffect, useState } from 'react';
import * as C from './App.styles'; 
import logoImage from './assets/images/devmemory_logo.png';
import btnRestartIcon from './assets/svgs/restart.svg';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/button';
import { GridItemType } from './types/GridItemType';

const App = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItem, setGridItems] = useState<GridItemType[]>([]);


    useEffect(() => resetAndCreateGrid(), []);

    const resetAndCreateGrid = () => {
        
    }

    return (
        <C.Container>
            <C.Info>
                <C.LogoLink href="">
                    <img src={logoImage} width="200" alt="" />
                </C.LogoLink>

                <C.InfoArea>
                    <InfoItem label="Tempo" value="00:00" />
                    <InfoItem label="Movimentos" value="0" />
                </C.InfoArea>
                
                <Button label="Reiniciar" icon={btnRestartIcon} onClick={resetAndCreateGrid}/>
            
            </C.Info>
            
            <C.GridArea>
                <C.Grid>

                </C.Grid>
            </C.GridArea>

        </C.Container>
    );
}

export default App;