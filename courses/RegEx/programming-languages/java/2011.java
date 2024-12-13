import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class regex {

    public class static void main(String[] args) {
        String file = "../results.csv";

        Pattern pat = Pattern.compile("^2011\\-.*[zk].*$");

        try {
            BufferedReader br = new BufferedReader(new FileReader(file));

            while ((line = br.readLine()) != null) {
                Matcher matcher = pat.matcher(line);

                if (matcher.find) {
                    System.out.println(line);
                }
            }
        } catch (Exception e) {
            System.out.println("nope!");
        }
    }

}