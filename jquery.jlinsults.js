<!-- 
/* 
    jlInsults - A jQuery plugin
    ==================================================================
    ©2011 JasonLau.biz - Version 1.0.1
    ==================================================================
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
*/

(function($){
 	$.fn.extend({ 
 		insult: function(options) {
			var defaults = {
			    show_form : true,
                animate : true,
                speed : 10,
                names : [],
                A : ['an irredeemably', 'an abominably', 'an egregiously', 'a conspicuously', 'an unutterably', 'an indescribably', 'an ineffably', 'a monstrously', 'a precociously', 'an outrageously', 'a preposterously', 'an unconscionably', 'an unequivocally', 'an incalculably', 'a confoundedly', 'a deucedly', 'a devilishly', 'a wickedly', 'a piteously', 'a grievously', 'a miserably', 'a cruelly', 'a woefully', 'a lamentably', 'a shockingly', 'a frightfully', 'a dreadfully', 'a sickly'],
                a : [],
                B : ['insufferable', 'appalling', 'babbling', 'backward', 'bantering', 'blabbering', 'blighted', 'boorish contemptible', 'cretinous', 'debauched', 'decadent', 'demented', 'depraved', 'detestable', 'dissolute', 'execrable', 'fiendish', 'foolish', 'foul', 'gluttonous', 'grotesque', 'gruesome', 'hideous', 'ignorant', 'ill-bred', 'ill-mannered', 'incompetent', 'incorrigible', 'indecent', 'inept', 'ignominious', 'insignificant', 'insufferable', 'lascivious', 'lecherous', 'licentious', 'loathsome', 'maladjusted', 'miserable', 'myopic', 'naive', 'narcissistic', 'obtuse', 'offensive', 'parasitic', 'pedestrian', 'perverted', 'petty', 'primitive', 'promiscuous', 'reprehensible', 'repugnant', 'repulsive', 'revolting', 'salacious', 'subliterate', 'sybaritic', 'uncivilized', 'uncouth', 'unseemly', 'unsightly', 'vile', 'vulgar', 'witless', 'minuscule', 'obese'],
                b : [],
                C : ['dullard', 'scoundrel', 'heathen', 'pick pocket', 'nose picker', 'home wrecker', 'dingleberry', 'scoundrel', 'beetlehead', 'neer-do-well', 'mauvais sujet', 'reprobate', 'ruffian', 'delinquent', 'malefactor', 'misdemeanant', 'blackguard', 'mouth breather', 'polisson', 'loafer', 'sneak', 'rapscallion', 'blackguard', 'barbarian', 'sycophant', 'cretin', 'degenerate', 'derelict', 'dolt', 'dreck', 'dunce', 'fiend', 'glutton', 'half-wit', 'heathen', 'idiot', 'imbecile', 'lackey', 'lecher', 'libertine', 'lout', 'menace', 'miscreant', 'moron', 'narcissist', 'neanderthal', 'oaf', 'harpy', 'onanist', 'parasite', 'peon', 'pervert', 'plebeian', 'reprobate', 'rogue', 'simpleton', 'slattern', 'sloven', 'subhuman', 'swine', 'sycophant', 'trollop', 'twit', 'vermin', 'wretch', 'yokel', 'reptile', 'hemorrhoid', 'troglodyte', 'filcher', 'sphincter', 'ignoramus', 'varmint', 'cannibal', 'ninny', 'nincompoop', 'tomfool', 'prostitute'],
                c : [],
                D : ['loathsome', 'ludicrous', 'maladjusted', 'malingering', 'malodorous', 'maniacal', 'miserable', 'myopic', 'narcissistic', 'nefarious', 'perverted', 'petty', 'masturbatory', 'hopeless', 'preposterous', 'primitive', 'putrid', 'reprehensible', 'repugnant', 'wearisome', 'revolting', 'dastardly', 'vacuous', 'vapid', 'decrepit', 'debased', 'debauched', 'decadent', 'belligerent', 'malingering', 'feculent', 'fiendish', 'flaccid', 'maniacal', 'demented', 'deplorable', 'depraved', 'myopic', 'naive', 'narcissistic', 'nefarious', 'preposterous', 'primitive', 'catatonic', 'disgusting', 'grotesque', 'frightful', 'gaudy', 'gluttonous', 'corrupt', 'degenerate', 'flagitious', 'infamous', 'miscreant', 'perverse', 'putrid', 'rotten', 'villainous', 'atrocious', 'heinous', 'monstrous', 'outrageous', 'flagrant', 'glaring', 'gross', 'rank', 'fecal'],
                d : [],
                E : ['disease-ridden', 'enema-addicted', 'stench-emitting', 'nose-picking', 'all-defiling', 'orgasm faking', 'scruffy-looking', 'all-befouling', 'urine-reeking', 'bug-eyed', 'snake-eyed', 'dull-witted', 'congenitally clueless', 'mucous-eating', 'mattress-soiling', 'chronically flatulent', 'foul-smelling', 'simple-minded', 'flea-infested', 'small-minded', 'air-polluting', 'odiously suffocating', 'maliciously malodorous', 'feeble-minded', 'nostril-offending', 'armpit-licking', 'buttock-rimming', 'toe-sucking', 'sheep-molesting', 'sock-sucking', 'irredeemably boring', 'blood-curdling', 'soul-destroying', 'flesh-creeping', 'blood-freezing', 'Internet-addicted', 'grudge-festering', 'heart-sickening', 'gossip-mongering', 'dandruff-eating', 'halitosis-infested', 'chromosome deficient', 'coma-inducing', 'monotonous solitaire playing', 'acidly acrimonious', 'thick-headed', 'one dimensional', 'cold-hearted', 'cantankerously-caterwauling', 'feces-collecting'],
                e : [],
                F : ['Inflictor of misery on all who cross your path', 'object of execration', 'ocular depravity to all of discrimination', 'toll on the nerves of those with good taste and decency', 'abomination to all and sundry', 'failure to endure the scrutiny of those with distinction', 'mass of loathsome repulsiveness', 'abomination to all the senses', 'assault on the ocular senses', 'depravity of genetics', 'tasteless amalgam of dross', 'drivel and malarkey', 'oppressive orgy of perversion', 'shameless exhibition of genetic deficiency', 'unspeakably offensive blackguard', 'personification of vulgarity', 'offense to all of good taste and decency', 'display of indecency', 'practitioner of bestiality', 'manifestation of contraceptive personality', 'cause of wailing and gnashing of teeth', 'mutilation of decency', 'orgy of indecency', 'orgy of indignity', 'vulgarity to all and sundry', 'pulp of stultifying inanity', 'mass of existential impotence', 'odious leach-covered glob of quivering slime', 'obfuscation of all that is good', 'conglomerate of intellectual constipation', 'depraved orgy of subhuman indecency', 'cacophonous catastrophe', 'malodorous marinade of ooze and bile', 'sub-literate simpleton', 'mediocrity afflicted with mental retardation', 'excrement stain on a Sumo Wrestlers underpants', 'putrid waste of flesh', 'hysterical mass of warbling inanity', 'curse on society', 'arbitrary dereliction of genetics', 'piece of excrement attached to a dogs posterior', 'spawn of a whore and a thousand maniacs', 'proof that God has a disturbed sense of humor', 'buggering bum bandit', 'parasite on the states resources', 'spawn of a mad scientist and a disastrous test tube experiment', 'cause of nightmares in small children', 'dreck whose natural odor could kill an elephant', 'dreg of the Internet', 'blight upon society', 'aberration of nature', 'atrocity to all of distinction and quality', 'abomination of humanity', 'offense to all of good taste and decency', 'scourge of decency', 'unfortunate occurrence of unprotected intercourse', 'lamentable mistake by your parents', 'plotless melodrama of uneventful life', 'cause of suffering to your parents', 'festering boil on the butt of humanity', 'plague upon humanity', 'gruesome vista to all eyes assaulted by the sight of you', 'tainted spawn of a syphilitic swamp hog', 'mass of neuroses and complexes', 'mass of neuroses and pathologies', 'mental midget with the natural grace of a swamp rat', 'malfunctioning little twerp', 'deplorable calamity of birth', 'glob of grease', 'acrid smog of oppressively caustic oral effluvium', 'nauseating assault on the senses', 'tainted spawn of a syphilitic swamp hog', 'proof that test tube experiments can go horribly wrong', 'leaking carbuncle on the posterior of a Beauty Queen', 'pimple on the face of beauty', 'proof that evolution can go in reverse', 'cesspool of putrid effluvium', 'sexual assaulter of barnyard animals', 'wretched horror to all who encounter you', 'plague of sighing and grief', 'molester of small furry animals', 'mean-spirited poltroon', 'odious leach-covered blob of quivering slime', 'molester of small old men', 'nefarious vermin', 'sideshow freak whose word is worthless', 'grotesque gargoyle', 'menace to the innocent', 'moving stench of leprosy', 'grudge-festering blackguard', 'chromosome-deficient yokel', 'festering boil on a whores doo dah', 'molester of goat scrotum', 'abomination to all the senses', 'syphilitic spawn of Satan', 'inhabitant of Sodom', 'pitiful sideshow freak', 'shameless exhibition of genetic deficiency', 'repulsive polisson', 'spawn from a lunatics rectum', 'pulp of stultifying inanity', 'leach on humanity', 'blight upon society', 'cheap Internet harpy', 'mass of neuroses and pathologies', 'nauseating assault on the senses', 'cesspool of sub-human filth', 'plague of sighing and grief', 'conglomerate of intellectual constipation', 'amalgamation of loathsome repulsiveness', 'malodorous heathen', 'spawn from a whores rectum'],
                f : []  
			}
				
			var option =  $.extend(defaults, options);
            var obj = $(this);

    		return this.each(function() {
    		  
              function generateInsult(){
                var A = option.A.concat(option.a),
                    B = option.B.concat(option.b),
                    C = option.C.concat(option.c),
                    D = option.D.concat(option.d),
                    E = option.E.concat(option.e),
                    F = option.F.concat(option.f),
                    a = A[Math.floor(Math.random()*A.length)],
                    b = B[Math.floor(Math.random()*B.length)],
                    c = C[Math.floor(Math.random()*C.length)],
                    d = D[Math.floor(Math.random()*D.length)],
                    e = E[Math.floor(Math.random()*E.length)],
                    f = F[Math.floor(Math.random()*F.length)];                   
              if($('#jlinsults-insult-name').val() != ''){
                var insult_string = $('#jlinsults-insult-name').val() + ' is ' + a + ' ' + b + ' ' + c + ' and a ' + d + ' ' + e + ' ' + f + '.';
              } else {
                try{
                if(option.names[0]){
                var name = option.names[Math.floor(Math.random()*option.names.length)];
                var insult_string = name + ' is ' + a + ' ' + b + ' ' + c + ' and a ' + d + ' ' + e + ' ' + f + '.';
              } else {
                var insult_string = 'You are ' + a + ' ' + b + ' ' + c + ' and a ' + d + ' ' + e + ' ' + f + '.';
              }
              } catch(e){};                
              }
              $('#jlinsults-insult').fadeOut('slow',function(){
                $('#jlinsults-insult').html(insult_string);
              });
              $('#jlinsults-insult').fadeIn('slow',function(){});
              return insult_string;
              }              
              obj.append('<div id="jlinsults-container"><div id="jlinsults-form" style="display:none"><label>Name:</label> <input type="text" size="22" id="jlinsults-insult-name" class="insult-name" /> <input type="button" value="Insult" id="jlinsults-insult-do" class="insult-do" /></div><div id="jlinsults-insult" class="insult"></div></div>');
              $('#jlinsults-insult-do').bind('click', function(){
                generateInsult();
              });
              if(option.show_form){
                $('#jlinsults-form').fadeIn('slow');
              }
              if(option.animate){
                if(!myInterval){
                    var myInterval = self.setInterval('jlInsults_Run()',option.speed*1000);
                }
              }             
              generateInsult();
             });
    	}
	});
	
})(jQuery);

function jlInsults_Run(speed){
    jQuery.noConflict();
    jQuery('#jlinsults-insult-do').trigger('click');
}

 -->