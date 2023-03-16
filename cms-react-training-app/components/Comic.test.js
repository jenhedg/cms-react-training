import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Comic from "./Comic"


afterEach(cleanup);

const comicData = {
    id: 420420,
    thumbnail: {
        extension: "jpg",
        path: "http://this/is/a/path/to/an/image",
    },
    title: "Once, Twice, Three Times the Lady",
    issueNumber: 11,
    dates: [
        {
            date: "2099-10-30T00:00:00-0500",
            type: "onsaleDate",
        }
    ],
    creators: {
        items: [
            {
                name: "Slippy Slappy Samsonite"
            }
        ]
    },
}

const getPubDate = jest.fn(() => "October 29, 2099" );
const getCreators = jest.fn(() => "Slippy Slappy Samsonite");

describe("<Comic />", () => {
    it("should not render if no props passed in", () => {
        const { debug, queryByTestId } = render(<Comic/>);
        const comic = queryByTestId("comic");
        expect(comic).not.toBeInTheDocument();
    });

    it("should render when all props present", () => {
        const { queryByTestId } = render(<Comic comicData={comicData} />);

        const comic = queryByTestId("comic");
        const title = queryByTestId("title");
        const issueNumber = queryByTestId("issueNumber");
        const publishDate = queryByTestId("publishDate");
        const creators = queryByTestId("creators");

        expect(comic).toBeInTheDocument();
        expect(title.textContent).toBe(`${comicData.title}`);
        expect(issueNumber.textContent).toBe(`Issue: ${comicData.issueNumber}`);

        getPubDate();
        expect(getPubDate).toHaveBeenCalledTimes(1);
        expect(publishDate.textContent).toBe(`Published: ${getPubDate(comicData.dates[0].date)}`)

        getCreators();
        expect(getCreators).toHaveBeenCalledTimes(1);
        expect(creators.textContent).toBe(`Creators: ${getCreators(comicData.creators)}`);
    })
});