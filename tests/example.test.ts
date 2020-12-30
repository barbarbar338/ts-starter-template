import { expect } from "chai";
import { format } from "..";

describe("Example Test", () => {
	it("Should format", (done) => {
		expect(format("Test")).to.equal("Test formatted!");
		done();
	});
});
