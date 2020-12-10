import java.io.File
import java.util.*
import kotlin.collections.ArrayList

var path = "src/main/resources/beispiel.txt"

var file = File(path)
var absolutePath = file.absolutePath
val files: Array<Number> = readFile(absolutePath);

var indexes = ArrayList<Number>();

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

fun main(args: Array<String>) {
    files.sort();
    for ((index, num) in files.withIndex()) {
        indexes.add(index + 1)
        if (index + 1 >= files.size) {
            break;
        }
        checkDiff(arrayOf(files.get(index).toInt(), files.get(index + 1).toInt()));
    }
    counter1++;
    counter3++;
    var result = counter1 * counter3;
    //println(result);
    loesung2();


}

fun readFile(fileName: String): Array<Number> {
    val files = ArrayList<Number>();
    File(fileName).forEachLine { files.add(it.toInt()) }
    return files.toTypedArray();
}

fun checkDiff(numbers: Array<Number>) {
    var diff = numbers[1].toInt() - numbers[0].toInt();
    //println(diff);
    when (diff) {
        1 -> {
            counter1 += 1
        }
        2 -> counter2 += 1
        3 -> {
            counter3 += 1
        }
        else -> { // Note the block
            //print("error lol")
        }
    }
}

fun loesung2() {
    var mathematischKorrektesProdukt: Long = 1;
    //var nindexes = indexes.toTypedArray();
    //nindexes.sort();
    //var nindexesBesser = ArrayList<Number>();
    //for (n in nindexes) {
    //    if (!Arrays.stream(nindexes).anyMatch { t -> t == n }){
    //        nindexesBesser.add(n);
    //    }
    //}
    when (diff) {
        1 -> {
            counter1 += 1
        }
        2 -> counter2 += 1
        3 -> {
            counter3 += 1
        }
        else -> { // Note the block
            //print("error lol")
        }
    }
    nindexesBesser.forEach { println(it) };

    //for ((index, num) in indexes.withIndex()) {
    //    mathematischKorrektesProdukt = mathematischKorrektesProdukt * indexes.get(index).toLong();
    //    println(mathematischKorrektesProdukt);
    //}
    //println(mathematischKorrektesProdukt);
}