import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7svg from '../../assets/svgs/b7.svg'
import { items } from '../../items/items';

type Props = {
    item: GridItemType;
    onClick: () => void;
}
export const GridItem = ({ item, onClick }: Props) => {

    return(
        <C.Container
            showBgColor = {item.permanentShown || item.shown} 
            onClick={onClick}
        >
            {!item.permanentShown && !item.shown &&
                <C.Icon src={b7svg} opacity={.1} />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="item of memory game"/>
            }
        </C.Container>
    );
}