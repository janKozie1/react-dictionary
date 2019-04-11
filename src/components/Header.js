import React from 'react';

import * as S from '../styledComponents/header'

const Header = ({children}) => {
    return (
        <S.Header>
            {children}
        </S.Header>
    );
};

export default Header;