<!-- 
/* 
    jlInsults - A jQuery plugin
    ==================================================================
    ©2011 JasonLau.biz - Version 1.0.2
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
                form_container : '',
                show_timer : true,
                timer_container : '',
                animate : true,
                speed : 10,
                names : [],
                A : ['a confoundedly','a conspicuously','a cruelly','a deucedly','a devilishly','a dreadfully','a frightfully','a grievously','a lamentably','a miserably','a monstrously','a piteously','a precociously','a preposterously','a shockingly','a sickly','a wickedly','a woefully','an abominably','an egregiously','an incalculably','an indescribably','an ineffably','an irredeemably','an outrageously','an unconscionably','an unequivocally','an unutterably'],
                a : [],
                B : ['appalling', 'babbling', 'backward', 'bantering', 'blabbering', 'blighted', 'boorish', 'contemptible', 'cretinous', 'debauched', 'decadent', 'demented', 'depraved', 'detestable', 'dissolute', 'execrable', 'fiendish', 'foolish', 'foul', 'gluttonous', 'grotesque', 'gruesome', 'hideous', 'ignominious', 'ignorant', 'ill-bred', 'ill-mannered', 'incompetent', 'incorrigible', 'indecent', 'inept', 'insignificant', 'insufferable', 'insufferable', 'lascivious', 'lecherous', 'licentious', 'loathsome', 'maladjusted', 'minuscule', 'miserable', 'myopic', 'naive', 'narcissistic', 'obese', 'obtuse', 'offensive', 'parasitic', 'pedestrian', 'perverted', 'petty', 'primitive', 'promiscuous', 'reprehensible', 'repugnant', 'repulsive', 'revolting', 'salacious', 'subliterate', 'sybaritic', 'uncivilized', 'uncouth', 'unseemly', 'unsightly', 'vile', 'vulgar', 'witless'],
                b : [],
                C : ['barbarian', 'beetlehead', 'blackguard', 'blackguard', 'cannibal', 'cretin', 'degenerate', 'delinquent', 'derelict', 'dingleberry', 'dolt', 'dreck', 'dullard', 'dunce', 'fiend', 'filcher', 'glutton', 'half-wit', 'harpy', 'heathen', 'heathen', 'hemorrhoid', 'home wrecker', 'idiot', 'ignoramus', 'imbecile', 'lackey', 'lecher', 'libertine', 'loafer', 'lout', 'malefactor', 'mauvais sujet', 'menace', 'miscreant', 'misdemeanant', 'moron', 'mouth breather', 'narcissist', 'neanderthal', 'neer-do-well', 'nincompoop', 'ninny', 'nose picker', 'oaf', 'onanist', 'parasite', 'peon', 'pervert', 'pick pocket', 'plebeian', 'polisson', 'prostitute', 'rapscallion', 'reprobate', 'reprobate', 'reptile', 'rogue', 'ruffian', 'scoundrel', 'scoundrel', 'simpleton', 'slattern', 'sloven', 'sneak', 'sphincter', 'subhuman', 'swine', 'sycophant', 'sycophant', 'tomfool', 'troglodyte', 'trollop', 'twit', 'varmint', 'vermin', 'wretch', 'yokel'],
                c : [],
                D : ['atrocious', 'belligerent', 'catatonic', 'corrupt', 'dastardly', 'debased', 'debauched', 'decadent', 'decrepit', 'degenerate', 'demented', 'deplorable', 'depraved', 'disgusting', 'fecal', 'feculent', 'fiendish', 'flaccid', 'flagitious', 'flagrant', 'frightful', 'gaudy', 'glaring', 'gluttonous', 'gross', 'grotesque', 'heinous', 'hopeless', 'infamous', 'loathsome', 'ludicrous', 'maladjusted', 'malingering', 'malingering', 'malodorous', 'maniacal', 'maniacal', 'masturbatory', 'miscreant', 'miserable', 'monstrous', 'myopic', 'myopic', 'naive', 'narcissistic', 'narcissistic', 'nefarious', 'nefarious', 'outrageous', 'perverse', 'perverted', 'petty', 'preposterous', 'preposterous', 'primitive', 'primitive', 'putrid', 'putrid', 'rank', 'reprehensible', 'repugnant', 'revolting', 'rotten', 'vacuous', 'vapid', 'villainous', 'wearisome'],
                d : [],
                E : ['acidly acrimonious', 'air-polluting', 'all-befouling', 'all-defiling', 'armpit-licking', 'blood-curdling', 'blood-freezing', 'bug-eyed', 'buttock-rimming', 'cantankerously-caterwauling', 'chromosome deficient', 'chronically flatulent', 'cold-hearted', 'coma-inducing', 'congenitally clueless', 'dandruff-eating', 'disease-ridden', 'dull-witted', 'enema-addicted', 'feces-collecting', 'feeble-minded', 'flea-infested', 'flesh-creeping', 'foul-smelling', 'gossip-mongering', 'grudge-festering', 'halitosis-infested', 'heart-sickening', 'Internet-addicted', 'irredeemably boring', 'maliciously malodorous', 'mattress-soiling', 'monotonous solitaire playing', 'mucous-eating', 'nose-picking', 'nostril-offending', 'odiously suffocating', 'one dimensional', 'orgasm faking', 'scruffy-looking', 'sheep-molesting', 'simple-minded', 'small-minded', 'snake-eyed', 'sock-sucking', 'soul-destroying', 'stench-emitting', 'thick-headed', 'toe-sucking', 'urine-reeking'],
                e : [],
                F : ['aberration of nature','abomination of humanity','abomination to all and sundry','abomination to all the senses','abomination to all the senses','acrid smog of oppressively caustic oral effluvium','amalgamation of loathsome repulsiveness','arbitrary dereliction of genetics','assault on the ocular senses','atrocity to all of distinction and quality','blight upon society','blight upon society','buggering bum bandit','cacophonous catastrophe','cause of nightmares in small children','cause of suffering to your parents','cause of wailing and gnashing of teeth','cesspool of putrid effluvium','cesspool of sub-human filth','cheap Internet harpy','chromosome-deficient yokel','conglomerate of intellectual constipation','conglomerate of intellectual constipation','curse on society','deplorable calamity of birth','depraved orgy of subhuman indecency','depravity of genetics','display of indecency','dreck whose natural odor could kill an elephant','dreg of the Internet','drivel and malarkey','excrement stain on a Sumo Wrestlers underpants','failure to endure the scrutiny of those with distinction','festering boil on a whores doo-dah','festering boil on the butt of humanity','glob of grease','grotesque gargoyle','grudge-festering blackguard','gruesome vista to all eyes assaulted by the sight of you','hysterical mass of warbling inanity','Inflicter of misery on all who cross your path','inhabitant of Sodom','lamentable mistake by your parents','leach on humanity','leaking carbuncle on the posterior of a Beauty Queen','malfunctioning little twerp','malodorous heathen','malodorous marinade of ooze and bile','manifestation of contraceptive personality','mass of existential impotence','mass of loathsome repulsiveness','mass of neuroses and complexes','mass of neuroses and pathologies','mass of neuroses and pathologies','mean-spirited poltroon','mediocrity afflicted with mental retardation','menace to the innocent','mental midget with the natural grace of a swamp rat','molester of goat scrotum','molester of small furry animals','molester of small old men','moving stench of leprosy','mutilation of decency','nauseating assault on the senses','nauseating assault on the senses','nefarious vermin','obfuscation of all that is good','object of execration','ocular depravity to all of discrimination','odious leach-covered blob of quivering slime','odious leach-covered glob of quivering slime','offense to all of good taste and decency','offense to all of good taste and decency','oppressive orgy of perversion','orgy of indecency','orgy of indignity','parasite on the states resources','personification of vulgarity','piece of excrement attached to a dogs posterior','pimple on the face of beauty','pitiful sideshow freak','plague of sighing and grief','plague of sighing and grief','plague upon humanity','plot-less melodrama of uneventful life','practitioner of bestiality','proof that evolution can go in reverse','proof that God has a disturbed sense of humor','proof that test tube experiments can go horribly wrong','pulp of stultifying inanity','pulp of stultifying inanity','putrid waste of flesh','repulsive polisson','scourge of decency','sexual assaulter of barnyard animals','shameless exhibition of genetic deficiency','shameless exhibition of genetic deficiency','sideshow freak whose word is worthless','spawn from a lunatics rectum','spawn from a whores rectum','spawn of a mad scientist and a disastrous test tube experiment','spawn of a whore and a thousand maniacs','sub-literate simpleton','syphilitic spawn of Satan','tainted spawn of a syphilitic swamp hog','tainted spawn of a syphilitic swamp hog','tasteless amalgam of dross','toll on the nerves of those with good taste and decency','unfortunate occurrence of unprotected intercourse','unspeakably offensive blackguard','vulgarity to all and sundry','wretched horror to all who encounter you'],
                f : []  
			}
				
			var option =  $.extend(defaults, options);
            var obj = $(this);
            var theform = '<label>Name:</label> <input type="text" size="22" id="jlinsults-insult-name" class="insult-name" /> <input type="button" id="jlinsults-insult-do" class="insult-do" value="Insult" />';
            var thetimer = '<input type="button" id="control-insults-on" value="'+options.speed+'" /><input type="button" id="control-insults-off" value="||"  style="display:none" />';
            obj.append('<div id="jlinsults-insult" class="insult"></div><input type="hidden" id="insults-a" value="" /><input type="hidden" id="insults-b" value="" /><input type="hidden" id="insults-c" value="" /><input type="hidden" id="insults-d" value="" /><input type="hidden" id="insults-e" value="" /><input type="hidden" id="insults-f" value="" />');
            if(option.form_container != '' && option.show_form){
                $(''+option.form_container+'').append(theform);
            } else {
                if(option.show_form){
                    obj.append(theform);
                }
            }
            if(option.timer_container && option.show_timer){
                $(''+option.timer_container+'').append(thetimer);
            } else {
                if(option.show_timer){
                    obj.append(thetimer);
                }
            }
            if(option.animate){
                var jlInsults_Interval = self.setInterval('timerControl('+options.speed+')',options.speed*100);
            }
            $('#jlinsults-insult-do').bind('mouseup', function(){
                $('#jlinsults-insult').fadeOut('slow',function(){
                    var A = option.A.concat(option.a),
                    B = option.B.concat(option.b),
                    C = option.C.concat(option.c),
                    D = option.D.concat(option.d),
                    E = option.E.concat(option.e),
                    F = option.F.concat(option.f);
                    do{
                        a = A[Math.floor(Math.random()*A.length)];
                    }while(a == $("#insults-a").val());
                    $("#insults-a").val(a);
                    do{
                        b = B[Math.floor(Math.random()*B.length)];   
                    }while(b == $("#insults-b").val());
                    $("#insults-b").val(b);
                    do{
                        c = C[Math.floor(Math.random()*C.length)];   
                    }while(c == $("#insults-c").val());
                    $("#insults-c").val(c);
                    do{
                        d = D[Math.floor(Math.random()*D.length)];   
                    }while(d == $("#insults-d").val());
                    $("#insults-d").val(d);
                    do{
                        e = E[Math.floor(Math.random()*E.length)];   
                    }while(e == $("#insults-e").val());
                    $("#insults-e").val(e);
                    do{
                        f = F[Math.floor(Math.random()*F.length)];   
                    }while(f == $("#insults-f").val());
                    $("#insults-f").val(f);
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
                    $('#jlinsults-insult').html(insult_string);
                    $('#jlinsults-insult').fadeIn('slow',function(){});
                });
            });
            
            $('#jlinsults-insult-do').trigger('mouseup');
            $('#control-insults-off').bind('mouseup',function(){
                $('#control-insults-on').show();                  
                $('#control-insults-on').val(options.speed);
                $(this).hide();                    
            });
            
            $('#control-insults-on').bind('mouseup',function(){
                $(this).val(options.speed);
                $(this).css('text-decoration','none');
                $(this).hide();
                $('#control-insults-off').css('font-weight','bold');
                $('#control-insults-off').show();
            });             
    	}
	});	
})(jQuery);

function timerControl(speed){ 
 if (jQuery('#control-insults-on').val()<=0){ 
    if(jQuery('#control-insults-on').is(':visible')){
        jQuery('#jlinsults-insult-do').trigger('mouseup');
    }    
    jQuery('#control-insults-on').val(speed)
 } 
 else  
    jQuery('#control-insults-on').val(jQuery('#control-insults-on').val()-1);
}

function jlInsults_Run(){
    jQuery.noConflict();
    jQuery('#jlinsults-insult-do').trigger('mouseup');
}

 -->