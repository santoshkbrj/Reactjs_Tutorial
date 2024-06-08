import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import UsernameDisplay from "../components/UsernameDisplay";

describe('UsernameDisplay', () => {
    it('should render username', () => {
        const result = render(<UsernameDisplay />);
        expect(result.container).toMatchSnapshot();
    })
})