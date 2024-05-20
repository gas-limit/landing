interface SectionsProps extends Record<string, string> {}

export const sections: NonNullable<SectionsProps>[] = [
	{
		title: "Create Your Index",
		description:
			"Mix standard ERC20s, LP tokens, and lending tokens from Fantom's leading protocols such as SpookySwap, Equalizer, Beethoven X, Polter Finance and more.",
	},
	{
		title: "Manage with Ease",
		description:
			"Rebalance your index with our intuitive swapping features to adjust to market conditions and optimize returns.",
	},
	{
		title: "Earn More",
		description:
			"Stake your index tokens containing LP tokens to earn extra rewards like governance tokens ($BOO, $EQUAL, $BEETS), automatically staked for multiplied gains.",
	},
	{
		title: "Flexible Investments",
		description:
			"Join or exit funds smoothly using any ERC20 tokens, or directly with the underlying assets.",
	},
	{
		title: "Automate Your Strategy",
		description:
			"Implement Dollar Cost Averaging (DCA) to automatically adjust your investments according to your chosen frequency and amount.",
	},
	{
		title: "Maximize Returns",
		description:
			"Opt to earn rewards in their normal form, swap them for any token, or compound them into your position for enhanced yields.",
	},
];
