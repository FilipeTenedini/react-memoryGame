import { useEffect, useState } from 'react';
import * as C from './App.styles'; 
import logoImage from './assets/images/devmemory_logo.png';
import btnRestartIcon from './assets/svgs/restart.svg';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/button';
import { GridItemType } from './types/GridItemType';
import { items } from './items/items';

const App = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItem, setGridItems] = useState<GridItemType[]>([]);


    useEffect(() => resetAndCreateGrid(), []);

    const resetAndCreateGrid = () => {
        // passo 1 - resetar o jogo
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);
         
        // passo 2.1 - criar um grid vazio
        const temporaryGrid: GridItemType[] = [];

        for (let i = 0; i < (items.length * 2); i++) {
            temporaryGrid.push({
                item: null,
                shown: false,
                permanentShown: false
            });
        }

        // passo 2.2 - preencher o grid

        // passo 2.3 - jogar no state
        setGridItems(temporaryGrid);
        // passo 3 - começar o jogo
        setPlaying(true);
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