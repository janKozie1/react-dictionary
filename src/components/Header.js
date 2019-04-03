import React from 'react';

import * as S from '../styledComponents/all'
const Header = ({children}) => {
    return (
        <S.Header>
            {children}
        </S.Header>
    );
};

export default Header;