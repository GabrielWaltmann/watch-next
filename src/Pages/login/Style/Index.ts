import styled from "styled-components"
import { GlobalTheme } from "../../../Style/Tokens"

export const Container = styled.main({
    backgroundColor: GlobalTheme.colors["gray-800"],
    height: '100vh',
    width: '100vw',
    fontSize: GlobalTheme.fontSize.lg
})