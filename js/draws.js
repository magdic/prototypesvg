window.onload = function () {
    var paper = Raphael("notepad", 700, 700);
	var technology = 'm 339.89698,475.1245 c -1.79797,-2.16642 -0.33202,-5.54799 2.40511,-5.54799 3.29923,0 4.98802,2.32248 3.58927,4.93608 -1.28352,2.39828 -4.25969,2.70209 -5.99438,0.61191 z m -22.00859,-15.34812 c -9.05781,-5.32648 -15.78327,-9.81653 -14.94546,-9.97787 1.75164,-0.33734 32.91422,17.54709 32.91422,18.8897 0,1.54855 -1.15337,0.97652 -17.96876,-8.91183 z m 31.96876,8.9022 c 0,-0.49385 6.4125,-4.61563 14.25,-9.1595 7.8375,-4.54387 15.22083,-8.88926 16.4074,-9.65641 1.26795,-0.81977 2.39819,-1.00523 2.74144,-0.44984 0.47613,0.7704 -31.14963,20.16368 -32.88208,20.16368 -0.28422,0 -0.51676,-0.40407 -0.51676,-0.89793 z m -8,-23.10207 c 0,-12.66667 0.36667,-20 1,-20 0.63333,0 1,7.33333 1,20 0,12.66667 -0.36667,20 -1,20 -0.63333,0 -1,-7.33333 -1,-20 z m -48.8,2.8 c -1.83936,-1.83936 -1.42956,-4.60678 0.86392,-5.83421 2.60203,-1.39257 4.93608,0.28591 4.93608,3.54967 0,3.14916 -3.54073,4.54381 -5.8,2.28454 z m 95.05,0.53772 c -1.70318,-0.68725 -1.58087,-4.81823 0.18608,-6.28467 1.87294,-1.55441 5.56392,0.2912 5.56392,2.78213 0,3.18228 -2.60746,4.77058 -5.75,3.50254 z m -85.75,-8.12596 c 1.11145,-1.17849 32.01805,-19.21176 32.92638,-19.21176 2.61683,0 -1.62634,3.08821 -14.42886,10.50144 -13.87731,8.03557 -21.04381,11.41022 -18.49752,8.71032 z m 63.25,-8.30998 c -13.35826,-7.70396 -17.82361,-10.90178 -15.22296,-10.90178 0.76227,0 29.5974,16.60763 31.97296,18.41487 1.49642,1.13842 1.62231,1.52765 0.5,1.54587 -0.825,0.0134 -8.5875,-4.06314 -17.25,-9.05896 z m -71.52144,-14.5613 c 0.17229,-12.59343 0.63671,-19.74916 1.27144,-19.59048 1.59683,0.39921 1.33189,38.4727 -0.27144,39.00715 -1.00609,0.33536 -1.21479,-3.717 -1,-19.41667 z m 94.77144,-0.34048 c 0,-12.66667 0.36667,-20 1,-20 0.63333,0 1,7.33333 1,20 0,12.66667 -0.36667,20 -1,20 -0.63333,0 -1,-7.33333 -1,-20 z m -49.06957,2.41618 c -0.95288,-1.14815 -1.02584,-2.04215 -0.26526,-3.25 1.49134,-2.36833 4.48106,-2.68669 5.97999,-0.63678 2.77564,3.79592 -2.69958,7.51981 -5.71473,3.88678 z m -20.93043,-14.51454 c -15.86776,-9.22103 -19.30249,-11.60674 -15.33987,-10.65481 3.12543,0.75082 32.33987,17.78022 32.33987,18.85125 0,1.56802 -1.15719,1.01009 -17,-8.19644 z m 31,8.21525 c 0,-1.12405 31.22487,-19.12771 33.10047,-19.08509 2.1262,0.0483 -0.93352,2.09808 -17.19015,11.516 -14.88812,8.62509 -15.91032,9.11139 -15.91032,7.56909 z m -8,-23.11689 c 0,-12.66667 0.36667,-20 1,-20 0.63333,0 1,7.33333 1,20 0,12.66667 -0.36667,20 -1,20 -0.63333,0 -1,-7.33333 -1,-20 z m -48.8,2.8 c -2.98558,-2.98558 0.32571,-7.65938 4.02418,-5.68002 2.20234,1.17865 2.33451,5.45165 0.19403,6.27303 -2.23266,0.85675 -2.85609,0.76911 -4.21821,-0.59301 z m 95.05,0.53772 c -1.84877,-0.746 -1.51679,-5.08904 0.47418,-6.20324 3.67042,-2.05407 7.06995,2.67139 4.07582,5.66552 -1.25034,1.25034 -2.43653,1.39052 -4.55,0.53772 z m -85.21429,-7.7217 c 1.94921,-1.84231 30.79194,-18.61602 32.01062,-18.61602 2.74483,0 -0.51596,2.3384 -14.99037,10.75 -14.87133,8.64226 -20.68354,11.32841 -17.02025,7.86602 z m 62.72834,-7.90961 c -14.32079,-8.37847 -17.54108,-10.70641 -14.81039,-10.70641 1.21869,0 30.06142,16.77371 32.01063,18.61602 3.79056,3.58268 -2.5073,0.68658 -17.20024,-7.90961 z m -26.27928,-13.7544 c -1.36881,-4.31273 4.42068,-6.86571 6.54944,-2.88809 0.8199,1.53199 0.79741,2.43404 -0.0873,3.5 -1.79701,2.16527 -5.69798,1.79588 -6.46218,-0.61191 z';
	var analytics = 'm 350.35715,507.52369 c 0,-1.44387 21.93231,-22.63397 22.66667,-21.89962 0.73435,0.73436 -20.45575,22.66667 -21.89962,22.66667 -0.42188,0 -0.76705,-0.34517 -0.76705,-0.76705 z m -10,-9.99337 c 0,-1.45439 35.93185,-36.64106 36.66667,-35.90625 0.73481,0.73482 -34.45186,36.66667 -35.90625,36.66667 -0.41823,0 -0.76042,-0.34219 -0.76042,-0.76042 z m -10,-10.0164 c 0,-1.42856 13.93296,-14.62356 14.66667,-13.88985 0.39787,0.39787 -2.3898,3.86064 -6.19482,7.69504 -6.53076,6.58119 -8.47185,8.00056 -8.47185,6.19481 z m 46.16251,-4.10158 c -0.73562,-0.46628 -1.18562,-1.92189 -1,-3.23469 0.46439,-3.28444 5.35665,-3.97728 6.33427,-0.89706 1.13494,3.57588 -2.17119,6.13669 -5.33427,4.13175 z m -56.16251,-5.87895 c 0,-1.4593 50.93163,-51.64435 51.66667,-50.90932 0.73503,0.73504 -49.45002,51.66667 -50.90932,51.66667 -0.41654,0 -0.75735,-0.34081 -0.75735,-0.75735 z m 28.16251,-6.12105 c -0.73562,-0.46628 -1.18562,-1.92189 -1,-3.23469 0.46439,-3.28443 5.35665,-3.97728 6.33427,-0.89706 1.13494,3.57588 -2.17119,6.13669 -5.33427,4.13175 z m -38.16251,-3.88075 c 0,-1.45655 40.59831,-41.30921 41.33333,-40.57418 0.73503,0.73502 -39.11763,41.33333 -40.57418,41.33333 -0.41753,0 -0.75915,-0.34162 -0.75915,-0.75915 z m 69.07393,-9.10271 c -1.28082,-2.39323 0.82369,-5.49988 3.38498,-4.99688 2.80196,0.55026 4.1953,3.36554 2.61066,5.27492 -1.77536,2.13917 -4.77647,2 -5.99564,-0.27804 z m -79.07393,-0.90064 c 0,-1.45108 29.932,-30.63884 30.66667,-29.90417 0.73467,0.73467 -28.45309,30.66667 -29.90417,30.66667 -0.41937,0 -0.7625,-0.34313 -0.7625,-0.7625 z m 32.97048,-32.77307 c -1.81696,-2.1893 -0.0625,-4.96443 3.13851,-4.96443 1.99001,0 2.39101,0.50313 2.39101,3 0,2.28 -0.501,3.07158 -2.08751,3.29826 -1.14812,0.16404 -2.69703,-0.43618 -3.44201,-1.33383 z m 21.55892,0.18073 c -2.04991,-1.49893 -1.73155,-4.48865 0.63678,-5.97999 1.20785,-0.76058 2.10185,-0.68762 3.25,0.26526 3.63303,3.01515 -0.0909,8.49037 -3.88678,5.71473 z m 18.95366,-1.69853 c -0.95452,-3.00744 1.86356,-5.84854 4.2857,-4.32069 0.95218,0.60062 1.73124,2.16799 1.73124,3.48305 0,3.35048 -4.99853,4.04635 -6.01694,0.83764 z';
	var creative = 'm 346.53982,217.98158 c -1.79797,-2.16642 -0.33202,-5.54799 2.40511,-5.54799 3.29923,0 4.98802,2.32248 3.58927,4.93608 -1.28352,2.39828 -4.25969,2.70209 -5.99438,0.61191 z m -207.78983,-0.21027 c -2.01619,-0.81355 -1.54122,-6.11052 0.60912,-6.79301 3.05766,-0.97046 5.14088,0.42971 5.14088,3.45529 0,3.33461 -2.36111,4.70517 -5.75,3.33772 z m 186.5237,-14.64648 c -14.18298,-8.28925 -17.53233,-10.69124 -14.90794,-10.69124 1.54208,0 32.13424,18.19456 32.13424,19.1117 0,1.5389 -1.13518,0.984 -17.2263,-8.42046 z m 31.2263,8.45626 c 0,-0.46888 6.4125,-4.5932 14.25,-9.16516 7.8375,-4.57196 15.22083,-8.93778 16.4074,-9.70183 1.26407,-0.81396 2.39858,-0.99894 2.73986,-0.44675 0.48527,0.78519 -31.06045,20.16624 -32.82373,20.16624 -0.31544,0 -0.57353,-0.38363 -0.57353,-0.8525 z m -8,-23.1475 c 0,-12.66667 0.36667,-20 1,-20 0.63333,0 1,7.33333 1,20 0,12.66667 -0.36667,20 -1,20 -0.63333,0 -1,-7.33333 -1,-20 z m -208.49856,14.86433 c -0.96914,-2.52554 -0.0733,-26.85311 0.99856,-27.11759 1.355,-0.33433 1.89758,26.25568 0.56299,27.59027 -0.66323,0.66323 -1.18644,0.50486 -1.56155,-0.47268 z m -39.83477,-1.531 c -1.395396,-1.39539 -0.584497,-5.30694 1.31041,-6.32107 2.86697,-1.53435 6.54501,2.14369 5.01066,5.01066 -1.01413,1.89491 -4.92568,2.70581 -6.32107,1.31041 z m 22.58014,-0.48653 c -1.43159,-1.43158 0.15609,-4.8468 2.25319,-4.8468 2.09711,0 3.68478,3.41522 2.2532,4.8468 -0.63426,0.63426 -1.6482,1.1532 -2.2532,1.1532 -0.605,0 -1.61894,-0.51894 -2.25319,-1.1532 z m 31.75319,-0.3468 c -0.99318,-1.19672 -0.99318,-1.80328 0,-3 1.68603,-2.03154 3.722,-1.88797 4.91801,0.3468 1.79474,3.3535 -2.44054,5.63837 -4.91801,2.6532 z m 21.04434,-0.41715 c -0.88119,-1.64652 -0.69799,-2.4292 0.95566,-4.08285 2.7966,-2.79659 6.26423,-1.11513 5.80993,2.81726 -0.40638,3.51762 -5.09131,4.394 -6.76559,1.26559 z m 394.9222,-9.54929 c 6.28865,-6.30655 11.65874,-11.24161 11.93354,-10.96681 0.65381,0.65381 -21.06103,22.43325 -22.36671,22.43325 -0.55041,0 4.14451,-5.1599 10.43317,-11.46644 z m -443.22382,1.80357 c -0.44053,-0.76348 8.46689,-22.88007 9.71932,-24.1325 0.29588,-0.29588 0.81735,-0.25857 1.15883,0.0829 0.62096,0.62096 -8.10097,22.46923 -9.60071,24.04959 -0.43693,0.46042 -1.01178,0.46042 -1.27744,0 z m -17.74272,-1.10589 c 0,-1.44117 19.93243,-20.63215 20.66667,-19.89791 0.73424,0.73424 -18.45674,20.66667 -19.89791,20.66667 -0.42282,0 -0.76876,-0.34594 -0.76876,-0.76876 z m 38.53659,-10.79835 c -2.60464,-6.36191 -4.4659,-11.83691 -4.13614,-12.16667 0.97993,-0.97993 1.54943,0.0578 6.17749,11.2569 4.61065,11.15692 4.98708,12.47688 3.55821,12.47688 -0.47512,0 -2.99492,-5.2052 -5.59956,-11.56711 z m 12.99564,1.59946 c -5.46164,-5.48221 -9.60114,-10.29677 -9.1989,-10.69902 0.73425,-0.73424 20.66667,18.45674 20.66667,19.89791 0,1.87682 -2.15884,0.1451 -11.46777,-9.19889 z m 138.66777,8.76765 c -1.82707,-1.82707 -1.43491,-4.60391 0.82067,-5.81106 2.28065,-1.22057 3.51524,-0.72461 4.97197,1.99731 1.79025,3.34511 -3.06481,6.54158 -5.79264,3.81375 z m 95.05,0.53772 c -1.84877,-0.746 -1.51679,-5.08904 0.47418,-6.20324 3.67042,-2.05407 7.06995,2.67139 4.07582,5.66552 -1.25034,1.25034 -2.43653,1.39052 -4.55,0.53772 z m 172.71342,-17.8011 c 10.14373,-10.15486 18.66809,-18.23845 18.94301,-17.96352 0.65371,0.65371 -35.07918,36.4269 -36.38587,36.4269 -0.55016,0 7.29913,-8.30852 17.44286,-18.46338 z m -258.41342,9.55029 c 1.16811,-1.12272 32.13177,-19.08691 32.89883,-19.08691 0.30314,0 0.55117,0.39973 0.55117,0.8883 0,1.17468 -30.81612,19.1117 -32.83424,19.1117 -0.97143,0 -1.20516,-0.34659 -0.61576,-0.91309 z m 63.47434,-8.03926 c -13.29922,-7.64972 -18.09137,-11.04765 -15.58063,-11.04765 0.98059,0 30.91003,17.16315 32.52058,18.64904 3.84233,3.54496 -2.54337,0.67953 -16.93995,-7.60139 z m 173.97566,-0.54765 c 4.09747,-4.125 7.89994,-7.5 8.44994,-7.5 0.55,0 -2.35247,3.375 -6.44994,7.5 -4.09747,4.125 -7.89994,7.5 -8.44994,7.5 -0.55,0 2.35247,-3.375 6.44994,-7.5 z m -446.42659,3.93055 c -1.184679,-1.18468 -1.316144,-2.04273 -0.536242,-3.5 1.101212,-2.05763 1.865992,-2.28868 4.381052,-1.32356 1.87145,0.71814 2.07589,3.4989 0.38178,5.19301 -1.58113,1.58114 -2.34256,1.51458 -4.22659,-0.36945 z m 77.8811,0.1378 c -1.56616,-1.16287 -1.73416,-1.81056 -0.84552,-3.25978 1.39961,-2.28253 3.35406,-2.31425 4.76508,-0.0773 0.83248,1.31976 0.72873,2.09453 -0.43651,3.25978 -1.34112,1.34112 -1.76821,1.3506 -3.48305,0.0773 z m 122.9907,0.14948 c -0.95493,-2.48851 0.0312,-38.21783 1.05479,-38.21783 0.62376,0 1.10201,7.43076 1.27114,19.75 0.18299,13.3288 -0.0711,19.75 -0.78138,19.75 -0.57889,0 -1.27394,-0.57698 -1.54455,-1.28217 z m 94.55479,-18.71783 c 0,-12.66667 0.36667,-20 1,-20 0.63333,0 1,7.33333 1,20 0,12.66667 -0.36667,20 -1,20 -0.63333,0 -1,-7.33333 -1,-20 z m 189.93043,16.41618 c -1.77644,-2.14049 0.0104,-4.91618 3.16486,-4.91618 2.72109,0 3.74779,2.77923 1.86484,5.04804 -1.56829,1.88967 -3.39165,1.84187 -5.0297,-0.13186 z M 109.04999,173.4935 c 1.04099,-1.03013 22.22232,-10.05991 23.59772,-10.05991 0.46875,0 0.85228,0.3862 0.85228,0.85822 0,0.47202 -5.0625,2.95051 -11.25,5.50775 -10.85683,4.48704 -15.24139,5.71403 -13.2,3.69394 z m 50.52433,-3.63743 c -11.16377,-4.75487 -11.74727,-5.08288 -10.77375,-6.0564 0.70837,-0.70836 23.47894,8.46815 24.29689,9.79162 1.11473,1.80367 -3.53201,0.5202 -13.52314,-3.73522 z m 395.38762,-23.38441 c 14.27114,-14.27906 26.17249,-25.73696 26.44746,-25.462 0.65371,0.65372 -50.08778,51.42393 -51.39484,51.42393 -0.55008,0 10.67624,-11.68287 24.94738,-25.96193 z m 2.46848,18.37811 c -1.77963,-2.14433 0.0125,-4.91618 3.17856,-4.91618 1.75927,0 2.48018,0.63065 2.7285,2.38691 0.53415,3.77776 -3.45377,5.4853 -5.90706,2.52927 z M 84.539818,162.98158 c -1.994699,-2.40347 -0.316914,-5.54799 2.960174,-5.54799 2.009345,0 3.05939,0.61176 3.515231,2.04799 0.766691,2.41563 -1.033784,4.95201 -3.515231,4.95201 -0.965311,0 -2.297389,-0.65341 -2.960174,-1.45201 z m 107.000002,0 c -1.9947,-2.40347 -0.31692,-5.54799 2.96017,-5.54799 2.00935,0 3.05939,0.61176 3.51523,2.04799 0.76669,2.41563 -1.03378,4.95201 -3.51523,4.95201 -0.96531,0 -2.29739,-0.65341 -2.96017,-1.45201 z m 154.8906,-0.13181 c -1.75398,-2.11343 -0.004,-4.91618 3.06957,-4.91618 3.07357,0 4.82355,2.80275 3.06957,4.91618 -0.72295,0.8711 -2.10426,1.58382 -3.06957,1.58382 -0.96531,0 -2.34662,-0.71272 -3.06957,-1.58382 z M 97.743761,161.78359 c -3.632687,-1.50608 1.358527,-2.35 13.898579,-2.35 10.77424,0 13.92809,0.28968 13.6091,1.25 -0.29923,0.90084 -4.02357,1.30179 -13.33333,1.43541 -7.10497,0.10198 -13.483422,-0.049 -14.174349,-0.33541 z m 58.784259,-0.29609 c -1.28829,-0.82823 -1.28199,-1.01923 0.0505,-1.53053 2.6272,-1.00815 28.44373,-0.11326 28.17439,0.97662 -0.32249,1.3049 -26.26478,1.81402 -28.22484,0.55391 z m 382.97197,-19.55391 c 11.26494,-11.275 20.9317,-20.5 21.4817,-20.5 0.55,0 -8.21676,9.225 -19.4817,20.5 -11.26494,11.275 -20.9317,20.5 -21.4817,20.5 -0.55,0 8.21676,-9.225 19.4817,-20.5 z m -418.86725,11.71914 c -6.25199,-2.59553 -11.20199,-5.16914 -11,-5.71914 0.44181,-1.20301 -0.34517,-1.45401 13.01741,4.15171 5.96741,2.50338 10.84984,4.95586 10.84984,5.44995 0,1.38023 -0.69766,1.16972 -12.86725,-3.88252 z m 28.05782,3.70916 c 0.52348,-1.57044 23.69453,-10.92323 24.36682,-9.83545 0.57356,0.92804 -2.87801,2.61817 -16.33342,7.998 -8.1455,3.25679 -8.53631,3.34618 -8.0334,1.83745 z m 176.55943,-9.19545 c -8.6625,-5.04601 -15.75,-9.57332 -15.75,-10.0607 0,-1.37268 2.39225,-0.19564 18.25,8.9794 12.73478,7.36813 16.97113,10.48553 14,10.30216 -0.4125,-0.0255 -7.8375,-4.17484 -16.5,-9.22086 z m 31.25,8.40669 c 0,-0.47326 7.13928,-4.97326 15.86507,-10 14.56664,-8.39155 19.10332,-10.51545 17.73622,-8.30343 -0.57016,0.92253 -31.94954,19.16389 -32.96636,19.16389 -0.34921,0 -0.63493,-0.38721 -0.63493,-0.86046 z m 232.30947,-3.77546 c -0.82725,-2.15578 0.94923,-4.86408 3.19053,-4.86408 0.98011,0 2.24019,0.72633 2.80016,1.61408 1.52773,2.42194 0.1156,4.88592 -2.80016,4.88592 -1.45016,0 -2.83531,-0.71022 -3.19053,-1.63592 z M 132.1296,142.31966 c -4.81532,-11.55975 -5.20292,-12.88607 -3.76575,-12.88607 0.75928,0 10.13614,21.57678 10.13614,23.32394 0,0.37183 -0.39167,0.67606 -0.87039,0.67606 -0.47871,0 -2.95371,-5.00127 -5.5,-11.11393 z m 11.37039,10.26165 c 0,-1.3754 9.02978,-22.55673 10.05992,-23.59772 2.06737,-2.08918 0.74514,2.69013 -3.68953,13.33607 -2.54629,6.11266 -5.02129,11.11393 -5.5,11.11393 -0.47871,0 -0.87039,-0.38353 -0.87039,-0.85228 z m 205,-19.14772 c 0,-12.66667 0.36667,-20 1,-20 0.63333,0 1,7.33333 1,20 0,12.66667 -0.36667,20 -1,20 -0.63333,0 -1,-7.33333 -1,-20 z m 175.96441,3.53564 c 8.49212,-8.50539 15.66512,-15.23944 15.94001,-14.96455 0.65373,0.65373 -29.07341,30.42891 -30.37982,30.42891 -0.55022,0 5.94769,-6.95896 14.43981,-15.46436 z m -405.43218,3.49671 c -5.46164,-5.48221 -9.60114,-10.29677 -9.19889,-10.69902 0.73424,-0.73424 20.66666,18.45674 20.66666,19.89791 0,1.87682 -2.15884,0.1451 -11.46777,-9.19889 z m 32.46777,9.19889 c 0,-1.44117 19.93243,-20.63215 20.66667,-19.89791 0.73424,0.73424 -18.45674,20.66667 -19.89791,20.66667 -0.42282,0 -0.76876,-0.34594 -0.76876,-0.76876 z m -50.8468,-2.47804 c -1.466771,-1.46677 -1.466771,-3.03963 0,-4.5064 1.43158,-1.43158 4.8468,0.15609 4.8468,2.2532 0,2.09711 -3.41522,3.68478 -4.8468,2.2532 z m 77.00931,0.3684 c -0.73562,-0.46628 -1.18562,-1.92189 -1,-3.23469 0.48293,-3.41549 5.19206,-3.41549 5.67498,0 0.28856,2.0408 -1.13049,4.08246 -2.83749,4.08246 -0.275,0 -1.10187,-0.3815 -1.83749,-0.84777 z m -38.16251,-16.1216 c 0,-11.77778 0.2381,-14 1.5,-14 1.26191,0 1.5,2.22222 1.5,14 0,11.77778 -0.23809,14 -1.5,14 -1.2619,0 -1.5,-2.22222 -1.5,-14 z m 160.2,4.8 c -1.8721,-1.8721 -1.41502,-4.61456 0.983,-5.89794 1.85692,-0.99379 2.45223,-0.83581 3.98548,1.05768 3.14578,3.88487 -1.44833,8.36041 -4.96848,4.84026 z m 95.05,0.53772 c -1.84877,-0.746 -1.51679,-5.08904 0.47418,-6.20324 3.67042,-2.05407 7.06995,2.67139 4.07582,5.66552 -1.25034,1.25034 -2.43653,1.39052 -4.55,0.53772 z m -85.21429,-7.7217 c 1.94921,-1.84231 30.79194,-18.61602 32.01063,-18.61602 2.74482,0 -0.51597,2.3384 -14.99038,10.75 -14.87133,8.64226 -20.68354,11.32841 -17.02025,7.86602 z m 62.73799,-7.92478 c -14.32187,-8.37043 -17.53895,-10.69124 -14.82004,-10.69124 1.21869,0 30.06142,16.77371 32.01063,18.61602 3.75391,3.54805 -2.46858,0.67951 -17.19059,-7.92478 z m -271.27147,4.93405 c -2.533522,-1.85256 -1.600255,-6.04088 1.44174,-6.47026 3.06904,-0.4332 5.38803,2.35612 4.04506,4.86546 -1.299,2.42722 -3.48691,3.06715 -5.4868,1.6048 z m 75.49777,-0.62529 c -2.79659,-2.79659 -1.11512,-6.26423 2.81726,-5.80993 2.0695,0.23908 2.75359,0.92317 2.99267,2.99267 0.4543,3.93238 -3.01333,5.61385 -5.80993,2.81726 z m -53.91801,-1.8468 c -0.68002,-1.27064 -0.6286,-2.20659 0.16482,-3 2.55354,-2.55354 6.34142,-0.12084 4.6712,3 -0.5436,1.01574 -1.63171,1.8468 -2.41801,1.8468 -0.7863,0 -1.8744,-0.83106 -2.41801,-1.8468 z m 31.91801,0.3468 c -0.99318,-1.19672 -0.99318,-1.80328 0,-3 2.47747,-2.98517 6.71275,-0.7003 4.91801,2.6532 -1.19601,2.23477 -3.23198,2.37834 -4.91801,0.3468 z m 388.36163,-5 c -1.40923,-3.67237 2.65128,-6.91566 5.31869,-4.24825 2.22293,2.22293 0.82519,5.74825 -2.27909,5.74825 -1.3552,0 -2.72302,-0.675 -3.0396,-1.5 z m 21.2098,-0.0714 c -2.03449,-2.03449 -1.98095,-2.74799 0.36556,-4.87155 2.09692,-1.89769 3.48518,-1.50523 5.05565,1.42923 0.74399,1.39016 0.59766,2.2806 -0.56605,3.4443 -1.97156,1.97156 -2.88199,1.97119 -4.85516,-0.002 z m 20.09524,-0.0952 c -1.18323,-1.18322 -0.70953,-4.05288 0.88786,-5.37859 1.29553,-1.07519 1.88513,-0.95953 3.53894,0.69428 2.42947,2.42947 1.59205,5.35098 -1.53379,5.35098 -1.22449,0 -2.52635,-0.3 -2.89301,-0.66667 z m -445.41667,-7.99561 c -2.01619,-0.81355 -1.54122,-6.11052 0.60912,-6.79301 3.05766,-0.97046 5.14088,0.42971 5.14088,3.45529 0,3.33461 -2.36111,4.70517 -5.75,3.33772 z m 207.23477,-3.38571 c -1.36881,-4.31273 4.42068,-6.86571 6.54944,-2.88809 0.8199,1.53199 0.79741,2.43404 -0.0873,3.5 -1.79701,2.16527 -5.69798,1.79588 -6.46218,-0.61191 z';
	draw(creative, { 'stroke-width': 3 }, paper);
};