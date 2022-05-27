/**
 * Crash Bot - FaucetPay is an application that will play for you automated.
 */
import puppeteer from "puppeteer";
import { setProbRounds } from "./controller/crash.js";

(async function getLastRound() {
    const browser = await puppeteer.launch({ headless: true, defaultViewport: null });
    const [page] = await browser.pages();
    await page.goto("https://faucetpay.io/crashes");
    await page.exposeFunction("setProbRounds", setProbRounds);
    await page.evaluate(() => {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length) {
                    const last_round = [];
                    mutation.addedNodes[0].childNodes.forEach((element) =>
                        last_round.push(
                            element.textContent.length < 10
                                ? parseFloat(element.textContent)
                                : element.textContent
                        )
                    );
                    window.setProbRounds(last_round);
                }
            }
        });
        observer.observe(document.querySelector("#crashes_games"), {
            childList: true,
            subtree: true,
        });
    });
})();

async function execOrder() {
    //auto_btn click
}
