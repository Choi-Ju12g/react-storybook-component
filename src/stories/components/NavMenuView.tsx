import { CSSProperties, useState } from 'react';
import styled, {css} from 'styled-components';
import { ReactElement } from 'react';

export interface NavMenuViewProps {
    onClick?: (e?: React.MouseEvent) => void;
    menuCount: number;
    defaultIndex?: number;
    className?: string;
    style?: CSSProperties;
    contents?: NavMenuContents[];
}

export interface NavMenuContents {
    index: number;
    title: string;
    contents: ReactElement;
}

export default function NavMenuView({
    onClick,
    menuCount,
    defaultIndex,
    className,
    style,
    contents
}: NavMenuViewProps) {

    const [currentIndex, setCurrentIndex] = useState(defaultIndex);

    function initNavMenuTitle(contentsObject?: NavMenuContents[]): ReactElement[] {
        let titleArr: string[] = [];
        if (contentsObject?.length === menuCount) {
            for (let i = 0; i < contentsObject.length; i++) {
                titleArr[i] = contentsObject[i].title;
            }
        } else {
            titleArr = Array.from({length: menuCount}, (v, i) => i.toString());
        }

        const titleResult: ReactElement[] = [];
        titleArr.map((element, idx) => {
            titleResult.push(<NavMenu 
                key={'NavMenu' + idx} 
                onClick={() => selectedMenuHandler(idx)}
                className={currentIndex === idx ? 'focused' : 'sub'}>
                    {element}
                </NavMenu>);
        });
        return titleResult;
    }

    function initNavMenuContents(contentsObject?: NavMenuContents[]): ReactElement {
        let contentsArr: ReactElement[] = [];
        if (contentsObject?.length === menuCount) {
            for (let i = 0; i < contentsObject.length; i++) {
                contentsArr[i] = contentsObject[i].contents;
            }
        } else {
            contentsArr = Array.from({length: menuCount}, (v, i) => <h2>{i + '번째 Tab Contents'}</h2>);
        }

        return contentsArr[currentIndex];
    }

    function selectedMenuHandler(index: number) {
        setCurrentIndex(index);

    }

    return (
        <div>
            <NavMenuWrapper>
                {initNavMenuTitle(contents)}
            </NavMenuWrapper>
            <MenuContentWrapper>
                {initNavMenuContents(contents)}
            </MenuContentWrapper>
        </div>
    );
}

const NavMenuWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 22px;
    width: 328px;
    margin-top: 10px;
    margin-bottom: 8px;

    .focused{
        color:#22CC88;
        border-bottom: solid 2px #22CC88;
    }
`;

const NavMenu = styled.li`
    flex-grow: 1;
    flex-basis: 100%;
    height: 22px;
    padding-bottom: 6px;
    border-bottom: solid 2px rgba(37, 40, 47, 0.1);
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #25282F;
`;

const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 328px;
`;