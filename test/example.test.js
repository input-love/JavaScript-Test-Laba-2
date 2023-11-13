const chai = require('chai');
const expect = chai.expect;
const main = require('../app.js');

describe('Test', () => {
    it('Positive: 1', () => {
      let data = ["word", "localization", "internationalization", "pneumonoultramicroscopicsilicovolcanoconiosis"];
      let response = ["word", "l10n", "i18n", "p43s"];
      const result = main(4, data);
      expect(result).to.deep.equal(response);
    });

    it('Negative: 2', () => {
      let data = ["6789word", "localization", "internationalization", "pneumonoultramicroscopicsilicovolcanoconiosis"];
      let response = ["ValueError"];
      const result = main(4, data);
      expect(result).to.deep.equal(response);
    });

    it('LimitBounds: 3', () => {
      let data = ["objectification"];
      let response = ["o13n"];
      const result = main(1, data);
      expect(result).to.deep.equal(response);
    });

    it('LimitBounds:4', () => {
      let data = ["sunshine", "elephant", "breeze", "laptop", "rainbow", "galaxy", "laughter", "ocean", "melody", "bicycle", "adventure", "telescope", "chocolate", "mountain", "dream", "dragon", "spark", "butterfly", "pillow", "whisper", "harmony", "potion", "zephyr", "echo", "serenade", "mystery", "labyrinth", "diamond", "tranquility", "waterfall", "enchantment", "kaleidoscope", "phoenix", "symphony", "velvet", "twilight", "passion", "moonlight", "voyage", "wonder", "prism", "starlight", "potion", "magic", "nebula", "nocturne", "sanctuary", "blossom", "serenity", "sunrise", "carousel", "cathedral", "jubilee", "shimmer", "radiant", "twilight", "ethereal", "lullaby", "cascade", "ember", "meadow", "mirage", "fantasy", "destiny", "jubilation", "ripple", "celestial", "illusion", "sapphire", "cascade", "intrigue", "potion", "cocoon", "mesmerize", "gossamer", "serendipity", "effervescent", "enchantment", "kaleidoscope", "crescendo", "celestial", "jubilation", "tryst", "clandestine", "zest", "serendipity", "effervescent", "sanctuary", "spellbound", "cascade", "silhouette", "zephyr", "dream", "tranquil", "nebula", "mystery", "symphony", "waltz", "jubilee", "food"];
      let response = ["sunshine", "elephant", "breeze", "laptop", "rainbow", "galaxy", "laughter", "ocean", "melody", "bicycle", "adventure", "telescope", "chocolate", "mountain", "dream", "dragon", "spark", "butterfly", "pillow", "whisper", "harmony", "potion", "zephyr", "echo", "serenade", "mystery", "labyrinth", "diamond", "t9y", "waterfall", "e9t", "k10e", "phoenix", "symphony", "velvet", "twilight", "passion", "moonlight", "voyage", "wonder", "prism", "starlight", "potion", "magic", "nebula", "nocturne", "sanctuary", "blossom", "serenity", "sunrise", "carousel", "cathedral", "jubilee", "shimmer", "radiant", "twilight", "ethereal", "lullaby", "cascade", "ember", "meadow", "mirage", "fantasy", "destiny", "jubilation", "ripple", "celestial", "illusion", "sapphire", "cascade", "intrigue", "potion", "cocoon", "mesmerize", "gossamer", "s9y", "e10t", "e9t", "k10e", "crescendo", "celestial", "jubilation", "tryst", "c9e", "zest", "s9y", "e10t", "sanctuary", "spellbound", "cascade", "silhouette", "zephyr", "dream", "tranquil", "nebula", "mystery", "symphony", "waltz", "jubilee", "food"];
      const result = main(100, data);
      expect(result).to.deep.equal(response);
    });

    it('LimitBounds:5', () => {
      let data = [];
      let response = ["RangeError"];
      const result = main(-1, data);
      expect(result).to.deep.equal(response);
    });

    it('LimitBounds: 6', () => {
      let data = ["orange", "sunshine", "elephant", "breeze", "laptop", "rainbow", "galaxy", "laughter", "ocean", "melody", "bicycle", "adventure", "telescope", "chocolate", "mountain", "dream", "dragon", "spark", "butterfly", "pillow", "whisper", "harmony", "potion", "zephyr", "echo", "serenade", "mystery", "labyrinth", "diamond", "tranquility", "waterfall", "enchantment", "kaleidoscope", "phoenix", "symphony", "velvet", "twilight", "passion", "moonlight", "voyage", "wonder", "prism", "starlight", "potion", "magic", "nebula", "nocturne", "sanctuary", "blossom", "serenity", "sunrise", "carousel", "cathedral", "jubilee", "shimmer", "radiant", "twilight", "ethereal", "lullaby", "cascade", "ember", "meadow", "mirage", "fantasy", "destiny", "jubilation", "ripple", "celestial", "illusion", "sapphire", "cascade", "intrigue", "potion", "cocoon", "mesmerize", "gossamer", "serendipity", "effervescent", "enchantment", "kaleidoscope", "crescendo", "celestial", "jubilation", "tryst", "clandestine", "zest", "serendipity", "effervescent", "sanctuary", "spellbound", "cascade", "silhouette", "zephyr", "dream", "tranquil", "nebula", "mystery", "symphony", "waltz", "jubilee", "waltz", "food"];
      let response = ["RangeError"];
      const result = main(101, data);
      expect(result).to.deep.equal(response);
    });

    it('LimitBounds: 7', () => {
      let data = ["a", "b"];
      let response = ["a", "b"];
      const result = main(2, data);
      expect(result).to.deep.equal(response);
    });

    it('LimitBounds: 8', () => {
      let data = ["qfjrohepvwzbnmucdxgykialtqkjelzsaopnmkloiuhftxvwbhmndfjywcmlqyrkqthftslqyjojpkobymkckkkszutdnlsnnssg"];
      let response = ["q98g"];
      const result = main(1, data);
      expect(result).to.deep.equal(response);
    });

    it('LimitBounds: 9', () => {
      let data = ["qfjrohepvwzbnmucdxgykialtqkjelzsaopxvwbhmndfjywcmlqyrkqthftslqyjojpkobymkckkkszutdnlsnnssgyfdgdfggfgdfvcgfxg"];
      let response = ["RangeError"];
      const result = main(1, data);
      expect(result).to.deep.equal(response);
    });

    it('LimitBounds: 10', () => {
      let data = ["dog", "\"", "student"];
      let response = ["ValueError"];
      const result = main(3, data);
      expect(result).to.deep.equal(response);
    });
});