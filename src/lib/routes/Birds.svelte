<script>
import Main from '../Main.svelte'
import Byline from '../Byline.svelte';
</script>



<Main>
<span slot="theTitle">birds page</span>
<span slot="theBody">this is the birds page</span>
<span slot="theByline">
    <Byline imgSource={'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_2.0/c_limit,w_600/f_jpg/fl_lossy,q_auto/v1543339661/181127-weill-birds-arent-real-tease_ipeive'}>
        <span slot="bylineText">BIRDS ARENT REAL OPEN YOUR EYES FOOL BIRDS ARENT REAL OPEN YOUR EYES FOOL BIRDS ARENT REAL OPEN YOUR EYES FOOL BIRDS ARENT REAL OPEN YOUR EYES FOOL BIRDS ARENT REAL OPEN YOUR EYES FOOL
        </span>
    </Byline>
</span>
</Main>