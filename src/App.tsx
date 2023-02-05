import { useEffect, useState } from 'react';
import * as C from './App.styles'; 

import logoImage from './assets/images/devmemory_logo.png';
import btnRestartIcon from './assets/svgs/restart.svg';

import { InfoItem } from './components/InfoItem';
import { Button } from './components/button';
import { GridItem } from './components/GridItem';

import { GridItemType } from './types/GridItemType';
import { items } from './items/items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';


const App = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);


    useEffect(() => resetGrid(), []);
    useEffect(()=> {
        const timer = setInterval(() => {

            if(playing) setTimeElapsed(timeElapsed+1)
        }, 1000);
        return () => clearInterval(timer);
    }, [playing, timeElapsed]);
    const createGrid = () => {
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
        for (let w = 0; w < 2; w++){
            
            for (let i = 0; i < items.length; i++){
                let position = -1;

                while ( position < 0 || temporaryGrid[position].item !== null) {
                    position = Math.floor(Math.random() * (items.length * 2))
                }
                temporaryGrid[position].item = i;
            }
        } 
        // passo 2.3 - jogar no state
        setGridItems(temporaryGrid);
    }

    const resetGrid = () => {
        // passo 1 - resetar o jogo
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);
         
        // passo 2 - criar o grid
        createGrid();

        // passo 3 - começar o jogo
        setPlaying(true);
    }

    const handleItemClick = (index: number) => {

    }


    return (
        <C.Container>
            {timeElapsed}
            <C.Info>
                <C.LogoLink href="">
                    <img src={logoImage} width="200" alt="" />
                </C.LogoLink>

                <C.InfoArea>
                    <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
                    <InfoItem label="Movimentos" value="0" />
                </C.InfoArea>
                
                <Button label="Reiniciar" icon={btnRestartIcon} onClick={resetGrid}/>
            
            </C.Info>
            
            <C.GridArea>
                <C.Grid>
                    {gridItems.map((item, index)=>(
                        <GridItem 
                            key={index}
                            item={item}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </C.Grid>
            </C.GridArea>

        </C.Container>
    );
}

export default App;